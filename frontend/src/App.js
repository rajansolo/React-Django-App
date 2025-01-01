import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";
import PostForm from "./Components/PostForm";
import PostList from "./Components/PostList";
import FetchData from "./Components/FetchData";

function App() {
  const [posts, setPosts] = useState([]);
  const [editingPostId, setEditingPostId] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/posts/")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const handleUpdatePost = (updatedPost) => {
    setPosts(
      posts.map((post) =>
        post.id === updatedPost.id ? { ...post, ...updatedPost } : post
      )
    );
  };

  const handleDeletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/fetch-data" className="nav-link">
          Fetch Data
        </Link>
      </nav>

      {/* Routes for Pages */}
      <Routes>
        <Route
          path="/"
          element={
            <div className="app-container">
              <h1 className="header">Blogscape</h1>
              <PostForm onAddPost={handleAddPost} />
              <PostList
                posts={posts}
                editingPostId={editingPostId}
                setEditingPostId={setEditingPostId}
                onUpdatePost={handleUpdatePost}
                onDeletePost={handleDeletePost}
              />
            </div>
          }
        />
        <Route path="/fetch-data" element={<FetchData />} />
      </Routes>
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import "./index.css";
// import PostForm from "./Components/PostForm";
// import PostList from "./Components/PostList";

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [editingPostId, setEditingPostId] = useState(null);

//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/posts/")
//       .then((response) => response.json())
//       .then((data) => setPosts(data));
//   }, []);

//   const handleAddPost = (newPost) => {
//     setPosts([newPost, ...posts]);
//   };

//   const handleUpdatePost = (updatedPost) => {
//     setPosts(
//       posts.map((post) =>
//         post.id === updatedPost.id ? { ...post, ...updatedPost } : post
//       )
//     );
//   };

//   const handleDeletePost = (postId) => {
//     setPosts(posts.filter((post) => post.id !== postId));
//   };

//   return (
//     <div className="app-container">
//       <h1 className="header">Blogscape</h1>
//       <PostForm onAddPost={handleAddPost} />
//       <PostList
//         posts={posts}
//         editingPostId={editingPostId}
//         setEditingPostId={setEditingPostId}
//         onUpdatePost={handleUpdatePost}
//         onDeletePost={handleDeletePost}
//       />
//     </div>
//   );
// }

// export default App;

//********************* */ Working code Start**/////////////////////////

// import React, { useState, useEffect } from "react";
// import "./index.css";

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [username, setUsername] = useState("");
//   const [content, setContent] = useState("");
//   const [editingPostId, setEditingPostId] = useState(null);
//   const [editingContent, setEditingContent] = useState("");

//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/posts/")
//       .then((response) => response.json())
//       .then((data) => setPosts(data));
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newPost = { username, content };

//     fetch("http://127.0.0.1:8000/api/posts/", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newPost),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setPosts([data, ...posts]);
//         setUsername("");
//         setContent("");
//       });
//   };

//   const handleEdit = (postId) => {
//     setEditingPostId(postId);
//     const postToEdit = posts.find((post) => post.id === postId);
//     setEditingContent(postToEdit.content);
//   };

//   const handleSaveEdit = (postId) => {
//     fetch(`http://127.0.0.1:8000/api/posts/${postId}/`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ content: editingContent }),
//     })
//       .then((response) => response.json())
//       .then((updatedPost) => {
//         setPosts(
//           posts.map((post) =>
//             post.id === postId ? { ...post, ...updatedPost } : post
//           )
//         );
//         setEditingPostId(null);
//         setEditingContent("");
//       });
//   };

//   const handleDelete = (postId) => {
//     fetch(`http://127.0.0.1:8000/api/posts/${postId}/`, {
//       method: "DELETE",
//     })
//       .then(() => {
//         setPosts(posts.filter((post) => post.id !== postId));
//       })
//       .catch((error) => console.error("Error deleting post:", error));
//   };

//   return (
//     <div className="app-container">
//       <h1 className="header">Blog Posts</h1>

//       <form className="post-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label className="label" htmlFor="username">
//             Username:
//           </label>
//           <input
//             className="input"
//             id="username"
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label className="label" htmlFor="content">
//             Content:
//           </label>
//           <textarea
//             className="textarea"
//             id="content"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <button className="submit-button" type="submit">
//           Post
//         </button>
//       </form>

//       <div className="posts-container">
//         <h2>All Blog Posts</h2>
//         {posts.map((post) => (
//           <div key={post.id} className="post">
//             <div className="post-header">
//               <span>{post.username}</span>
//               <span>{new Date(post.created_at).toLocaleString()}</span>
//             </div>
//             <div className="post-content">
//               {editingPostId === post.id ? (
//                 <>
//                   <textarea
//                     className="textarea"
//                     value={editingContent}
//                     onChange={(e) => setEditingContent(e.target.value)}
//                   ></textarea>
//                   <button
//                     className="edit-button"
//                     onClick={() => handleSaveEdit(post.id)}
//                   >
//                     Save
//                   </button>
//                   <button
//                     className="cancel-button"
//                     onClick={() => setEditingPostId(null)}
//                   >
//                     Cancel
//                   </button>
//                 </>
//               ) : (
//                 <p>{post.content}</p>
//               )}
//             </div>
//             {post.last_edited && (
//               <div className="post-footer">
//                 <small>
//                   Last Edited: {new Date(post.last_edited).toLocaleString()}
//                 </small>
//               </div>
//             )}
//             <div className="post-actions">
//               <button
//                 className="edit-button"
//                 onClick={() => handleEdit(post.id)}
//               >
//                 Edit
//               </button>
//               <button
//                 className="delete-button"
//                 onClick={() => handleDelete(post.id)}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

//********************* */ Working code end**/////////////////////////
