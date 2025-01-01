import React, { useState } from "react";

function Post({
  post,
  isEditing,
  setEditingPostId,
  onUpdatePost,
  onDeletePost,
}) {
  const [editingTitle, setEditingTitle] = useState(post.title);
  const [editingContent, setEditingContent] = useState(post.content);

  const handleSaveEdit = () => {
    fetch(`http://127.0.0.1:8000/api/posts/${post.id}/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: editingTitle, content: editingContent }),
    })
      .then((response) => response.json())
      .then((updatedPost) => {
        onUpdatePost(updatedPost);
        setEditingPostId(null);
      });
  };

  const handleCancelEdit = () => {
    setEditingPostId(null);
    setEditingTitle(post.title);
    setEditingContent(post.content);
  };

  const handleDelete = () => {
    fetch(`http://127.0.0.1:8000/api/posts/${post.id}/`, {
      method: "DELETE",
    }).then(() => onDeletePost(post.id));
  };

  return (
    <div className="post">
      <div className="post-header">
        <span>{post.username}</span>
        <span>{new Date(post.created_at).toLocaleString()}</span>
      </div>
      <div className="post-title">
        {isEditing ? (
          <input
            className="input"
            value={editingTitle}
            onChange={(e) => setEditingTitle(e.target.value)}
          />
        ) : (
          <strong>{post.title}</strong>
        )}
      </div>
      <div className="post-content">
        {isEditing ? (
          <>
            <textarea
              className="textarea"
              value={editingContent}
              onChange={(e) => setEditingContent(e.target.value)}
            ></textarea>
            <button className="edit-button" onClick={handleSaveEdit}>
              Save
            </button>
            <button className="cancel-button" onClick={handleCancelEdit}>
              Cancel
            </button>
          </>
        ) : (
          <p>{post.content}</p>
        )}
      </div>
      <div className="post-actions">
        {!isEditing && (
          <>
            <button
              className="edit-button"
              onClick={() => setEditingPostId(post.id)}
            >
              Edit
            </button>
            <button className="delete-button" onClick={handleDelete}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Post;
