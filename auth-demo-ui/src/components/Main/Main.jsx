import "./Main.css"
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../UserContext.js";
import { Link } from "react-router-dom";

function Main() {
    const { user, updateUser } = useContext(UserContext);
    const [posts, setPosts] = useState([]);
    const [form, setForm] = useState({
      title: '',
      content: '',
      credentials: 'include'
    });
  
    useEffect(() => {
      const fetchPosts = async () => {
        const response = await fetch('http://localhost:3000/posts');
        const data = await response.json();
        setPosts(data);
      };
      fetchPosts();
    }, []);
  
    const handleChange = (event) => {
      setForm({
        ...form,
        [event.target.name]: event.target.value,
      });
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const response = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
        credentials: 'include'
      });
      const newPost = await response.json();
      setPosts([newPost, ...posts]);
    };

    const handleLogout = () => {
      // Perform logout logic here
      // Example: Clear user data from localStorage, reset user state, etc.
      updateUser(null);
    };
  
    return (
      <div className="main">
      <header className="header">
        <div className="user-info">
          {user ? (
            <>
              <span>Hi {user.username}! |</span>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </header>
        <form className="new-post-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={form.title}
                onChange={handleChange}
            />
            <textarea
                name="content"
                placeholder="Content"
                value={form.content}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
        <div className="posts-container">
          {posts.map((post) => (
          <div className="post" key={post.id}>
              <h2>{post.title}</h2>
              <h4>By {post.user.username} at {new Date(post.createdAt).toLocaleString()}</h4>
              <p>{post.content}</p>
          </div>
          ))}
        </div>
      </div>
    )
}

export default Main;