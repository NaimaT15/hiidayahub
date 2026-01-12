import { Link, useNavigate } from 'react-router-dom';
import { logout, getCurrentUser } from '../services/authService';
import { BookOpen, User, LogOut, Menu } from 'lucide-react';
import { useState } from 'react';
import '../styles/components/Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const token = getCurrentUser();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link to="/" className="navbar-brand">
                    <BookOpen className="icon" />
                    <span>HiidayaHub</span>
                </Link>

                <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                    <Link to="/teachers" onClick={() => setIsOpen(false)}>Find a Teacher</Link>
                    {token ? (
                        <>
                            <Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
                            <button onClick={handleLogout} className="btn btn-outline btn-sm">
                                <LogOut size={16} /> Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="btn btn-outline btn-sm" onClick={() => setIsOpen(false)}>Login</Link>
                            <Link to="/register" className="btn btn-primary btn-sm" onClick={() => setIsOpen(false)}>Get Started</Link>
                        </>
                    )}
                </div>

                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    <Menu />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
