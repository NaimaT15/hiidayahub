import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Users } from 'lucide-react';
import '../styles/pages/Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <section className="hero-section">
                <div className="container hero-content">
                    <h1>Find Your Perfect <span className="highlight">Quran Teacher</span> Today</h1>
                    <p className="hero-text">
                        Connect with qualified tutors from around the world. Master the Quran with personalized 1-on-1 sessions at your own pace.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/teachers" className="btn btn-primary btn-lg">
                            Find a Tutor <ArrowRight size={20} />
                        </Link>
                        <Link to="/register" className="btn btn-outline btn-lg">
                            Become a Student
                        </Link>
                    </div>
                </div>
            </section>

            <section className="features-section container">
                <div className="feature-card">
                    <div className="icon-wrapper"><Star /></div>
                    <h3>Expert Tutors</h3>
                    <p>Verified teachers with years of experience in Quranic studies.</p>
                </div>
                <div className="feature-card">
                    <div className="icon-wrapper"><Users /></div>
                    <h3>1-on-1 Learning</h3>
                    <p>Personalized attention to help you progress faster.</p>
                </div>
                <div className="feature-card">
                    <div className="icon-wrapper"><Shield /></div>
                    <h3>Secure & Easy</h3>
                    <p>Safe payments and easy scheduling management.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
