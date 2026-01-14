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

    const DUMMY_TEACHERS = [
        {
            id: 1,
            user: { email: "fatima@example.com" },
            language: "Arabic",
            country: "Egypt",
            experience: "5 Years",
            bio: "Certified Quran teacher with 5 years of experience in Tajweed and Hifz. I specialize in teaching children and beginners.",
            hourlyRate: 15.00
        },
        {
            id: 2,
            user: { email: "abdul@example.com" },
            language: "Somali",
            country: "Somalia",
            experience: "3 Years",
            bio: "Native Somali speaker and experienced tutor. I can help you improve your conversation skills and grammar.",
            hourlyRate: 12.50
        },
        {
            id: 3,
            user: { email: "zainab@example.com" },
            language: "English",
            country: "UK",
            experience: "7 Years",
            bio: "Professional English teacher specializing in IELTS preparation and business English. Let's achieve your goals together!",
            hourlyRate: 25.00
        },
        {
            id: 4,
            user: { email: "yusuf@example.com" },
            language: "Arabic",
            country: "Jordan",
            experience: "4 Years",
            bio: "Passionate about teaching Arabic to non-native speakers. I make learning fun and engaging clearly.",
            hourlyRate: 18.00
        }
    ];

    const fetchTeachers = async (lang) => {
        try {
            // const data = await getTeachers(lang);
            setTeachers(DUMMY_TEACHERS);
        } catch (err) {
            console.error('Failed to fetch teachers', err);
            setTeachers(DUMMY_TEACHERS); // Fallback to dummy data
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
