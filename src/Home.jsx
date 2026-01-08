import React from 'react';
import { Link } from 'react-router-dom';
import ProfileCard from './components/ProfileCard';
import LiveTextPreview from './components/LiveTextPreview';
import Product from './components/Product';
import DataFetcher from './components/DataFetcher';
import './Home.css';

function Home() {
    // User data for the UserList
    const users = [
        { id: '1', name: 'Arjun Sharma' },
        { id: '2', name: 'Rahul Patel' },
        { id: '3', name: 'Vikram Kumar' },
        { id: '4', name: 'Aditya Singh' }
    ];

    return (
        <div>
            <h1 className="title">React Tasks</h1>

            {/* Task 2: Live Text Preview */}
            <div className="section">
                <LiveTextPreview />
            </div>

            {/* Task 5: Data Fetching from API */}
            <div className="section">
                <DataFetcher />
            </div>

            {/* Task 4: User Profiles with Routing */}
            <div className="section">
                <h2 className="section-title">User Profiles (Click to View)</h2>
                <div className="user-list">
                    {users.map(user => (
                        <Link to={`/user/${user.id}`} key={user.id} className="user-link">
                            <div className="user-link-card">
                                <div className="user-link-avatar">{user.name.charAt(0)}</div>
                                <p>{user.name}</p>
                                <span className="view-profile">View Profile →</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Task 3: Product Cards */}
            <div className="section">
                <h2 className="section-title">Products</h2>
                <div className="card-container">
                    <Product
                        title="Wireless Headphones"
                        price={79.99}
                        availability={true}
                    />

                    <Product
                        title="Smart Watch"
                        price={199.99}
                        availability={true}
                    />

                    <Product
                        title="Gaming Mouse"
                        price={49.99}
                        availability={false}
                    />

                    <Product
                        title="Mechanical Keyboard"
                        price={129.99}
                        availability={true}
                    />
                </div>
            </div>

            {/* Task 1: Profile Cards */}
            <div className="section">
                <h2 className="section-title">Team Profiles</h2>
                <div className="card-container">
                    <ProfileCard
                        name="Rohan Desai"
                        image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
                        description="Frontend Developer with passion for creating beautiful user interfaces"
                    />

                    <ProfileCard
                        name="Karan Mehta"
                        image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                        description="Full Stack Developer who loves building scalable applications"
                    />

                    <ProfileCard
                        name="Nikhil Reddy"
                        image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
                        description="UI/UX Designer focused on creating delightful user experiences"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
