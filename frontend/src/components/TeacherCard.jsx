import { Star, MapPin, Languages, Clock } from 'lucide-react';
import '../styles/components/TeacherCard.css';

const TeacherCard = ({ teacher, onBook }) => {
    return (
        <div className="teacher-card">
            <div className="teacher-header">
                <div className="teacher-avatar">
                    {teacher.user?.email?.[0]?.toUpperCase() || 'T'}
                </div>
                <div>
                    <h3>{teacher.user?.email?.split('@')[0]}</h3>
                    <div className="teacher-rating">
                        <Star size={16} fill="var(--accent-color)" stroke="var(--accent-color)" />
                        <span>5.0</span>
                    </div>
                </div>
            </div>

            <div className="teacher-details">
                <div className="detail-item">
                    <Languages size={16} />
                    <span>{teacher.language}</span>
                </div>
                <div className="detail-item">
                    <MapPin size={16} />
                    <span>{teacher.country}</span>
                </div>
                <div className="detail-item">
                    <Clock size={16} />
                    <span>{teacher.experience} Experience</span>
                </div>
            </div>

            <p className="teacher-bio">{teacher.bio}</p>

            <div className="teacher-footer">
                <div className="teacher-rate">
                    <span className="amount">${teacher.hourlyRate}</span>
                    <span className="unit">/hr</span>
                </div>
                <button className="btn btn-primary btn-sm" onClick={() => onBook(teacher)}>
                    Book Session
                </button>
            </div>
        </div>
    );
};

export default TeacherCard;
