import { useEffect, useState } from "react";
import { API_URL } from "../shared/constant";
import "../cssFiles/PostList.css";

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_URL}/posts`)
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="post-list-container">
            {loading ? (
                <h1 className="loading">Loading...</h1>
            ) : (
                <div>
                    <h2 className="header">Posts</h2>
                    <ul className="post-list">
                        {posts.map((post) => (
                            <li key={post.id} className="post-item">
                                <h3 className="post-title">{post.title}</h3>
                                <p className="post-body">{post.body}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default PostList;
