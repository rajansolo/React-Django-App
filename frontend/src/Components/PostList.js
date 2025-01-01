import React from "react";
import Post from "./Post";

function PostList({
  posts,
  editingPostId,
  setEditingPostId,
  onUpdatePost,
  onDeletePost,
}) {
  return (
    <div className="posts-container">
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          isEditing={editingPostId === post.id}
          setEditingPostId={setEditingPostId}
          onUpdatePost={onUpdatePost}
          onDeletePost={onDeletePost}
        />
      ))}
    </div>
  );
}

export default PostList;
