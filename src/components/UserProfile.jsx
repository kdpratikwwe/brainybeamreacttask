import React from 'react';
import { useParams } from 'react-router-dom';
import './UserProfile.css';

function UserProfile() {
    // Get the userId from the URL
    const { userId } = useParams();

    // Simulated user data
    const users = [
        { id: '1', name: 'Arjun Sharma', email: 'arjun@example.com', role: 'Frontend Developer', bio: 'Loves building interactive UIs with React' },
        { id: '2', name: 'Rahul Patel', email: 'rahul@example.com', role: 'Backend Developer', bio: 'Expert in Node.js and databases' },
        { id: '3', name: 'Vikram Kumar', email: 'vikram@example.com', role: 'Full Stack Developer', bio: 'Jack of all trades, master of some' },
        { id: '4', name: 'Aditya Singh', email: 'aditya@example.com', role: 'UI/UX Designer', bio: 'Creating beautiful user experiences' }
    ];

    // Find the user with matching ID
    const user = users.find(u => u.id === userId);

    // If user not found, show error message
    if (!user) {
        return (
            <div className="user-profile-container">
                <div className="error-message">
                    <h2>❌ User Not Found</h2>
                    <p>No user exists with ID: {userId}</p>
                </div>
            </div>
        );
    }

    // Show user details if found
    return (
        <div className="user-profile-container">
            <div className="user-profile-card">
                <div className="user-avatar">
                    {user.name.charAt(0)}
                </div>
                <h2 className="user-name">{user.name}</h2>
                <p className="user-role">{user.role}</p>
                <div className="user-details">
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>User ID:</strong> {user.id}</p>
                    <p className="user-bio">{user.bio}</p>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
