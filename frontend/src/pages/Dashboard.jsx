import { useEffect, useState } from 'react';
import { getStudentBookings } from '../services/dataService';
import '../styles/pages/Dashboard.css';

const Dashboard = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        // Hardcoded ID 1 for now as we don't have user context with logic
        // In real app, we decode token or fetch /api/auth/me
        fetchBookings(1);
    }, []);

    const fetchBookings = async (id) => {
        try {
            const data = await getStudentBookings(id);
            setBookings(data);
        } catch (err) {
            console.error('Failed to fetch bookings', err);
        }
    };

    return (
        <div className="dashboard-page container">
            <div className="page-header custom-header">
                <h1>My Dashboard</h1>
            </div>

            <div className="dashboard-section">
                <h2>My Bookings</h2>
                {bookings.length === 0 ? (
                    <div className="empty-state-card">
                        <p>You haven't booked any sessions yet.</p>
                    </div>
                ) : (
                    <div className="bookings-list">
                        {bookings.map((booking) => (
                            <div key={booking.id} className="booking-card">
                                <div className="booking-info">
                                    <h3>Session with {booking.teacher?.user?.email}</h3>
                                    <span className={`status ${booking.status.toLowerCase()}`}>{booking.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
