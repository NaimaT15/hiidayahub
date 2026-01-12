import { useEffect, useState } from 'react';
import { getTeachers } from '../services/dataService';
import TeacherCard from '../components/TeacherCard';
import BookingModal from '../components/BookingModal';
import { Search } from 'lucide-react';
import '../styles/pages/TeacherList.css';

const TeacherList = () => {
    const [teachers, setTeachers] = useState([]);
    const [search, setSearch] = useState('');
    const [selectedTeacher, setSelectedTeacher] = useState(null);

    useEffect(() => {
        fetchTeachers();
    }, []);

    const fetchTeachers = async (lang) => {
        try {
            const data = await getTeachers(lang);
            setTeachers(data);
        } catch (err) {
            console.error('Failed to fetch teachers', err);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchTeachers(search);
    };

    return (
        <div className="teacher-list-page container">
            <div className="page-header">
                <h1>Find Your Tutor</h1>
                <form onSubmit={handleSearch} className="search-bar">
                    <Search className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search by language (e.g., Arabic, English)..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
            </div>

            <div className="teachers-grid">
                {teachers.map((teacher) => (
                    <TeacherCard
                        key={teacher.id}
                        teacher={teacher}
                        onBook={() => setSelectedTeacher(teacher)}
                    />
                ))}
            </div>

            {teachers.length === 0 && (
                <div className="empty-state">
                    <p>No teachers found. Try a different search term.</p>
                </div>
            )}

            {selectedTeacher && (
                <BookingModal
                    teacher={selectedTeacher}
                    onClose={() => setSelectedTeacher(null)}
                />
            )}
        </div>
    );
};

export default TeacherList;
