import React, { useState, useEffect } from 'react';
import './DataFetcher.css';

function DataFetcher() {
    // State for storing posts data
    const [posts, setPosts] = useState([]);

    // State for loading status
    const [loading, setLoading] = useState(true);

    // State for error handling
    const [error, setError] = useState(null);

    // useEffect runs when component mounts
    useEffect(() => {
        // Function to fetch data from API
        function fetchPosts() {
            fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch data');
                    }
                    return response.json();
                })
                .then(data => {
                    setPosts(data);
                    setLoading(false);
                })
                .catch(err => {
                    setError(err.message);
                    setLoading(false);
                });
        }

        fetchPosts();
    }, []); // Empty array means this runs only once when component mounts

    // Show loading state
    if (loading) {
        return (
            <div className="data-fetcher-container">
                <div className="loading">
                    <div className="spinner"></div>
                    <p>Loading posts...</p>
                </div>
            </div>
        );
    }

    // Show error state
    if (error) {
        return (
            <div className="data-fetcher-container">
                <div className="error">
                    <h2>❌ Error</h2>
                    <p>{error}</p>
                    <button onClick={() => window.location.reload()} className="retry-button">
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    // Show posts data
    return (
        <div className="data-fetcher-container">
            <h2 className="data-title">Latest Posts from API</h2>
            <div className="posts-grid">
                {posts.map(post => (
                    <div key={post.id} className="post-card">
                        <div className="post-id">#{post.id}</div>
                        <h3 className="post-title">{post.title}</h3>
                        <p className="post-body">{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DataFetcher;
