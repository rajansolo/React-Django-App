import React, { useState } from "react";

function PostForm({ onAddPost }) {
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = { username, title, content };

    fetch("http://127.0.0.1:8000/api/posts/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((data) => {
        onAddPost(data);
        setUsername("");
        setTitle("");
        setContent("");
      });
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Username:</label>
        <input
          className="input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Title:</label>
        <input
          className="input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Content:</label>
        <textarea
          className="textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" className="submit-button">
        Post
      </button>
    </form>
  );
}

export default PostForm;
