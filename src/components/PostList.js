import React, { Component } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, setSelectedPost } from '../features/posts/postsSlice';

const PostsList = () => {
    const dispatch = useDispatch(); // useDispatch() → To send actions (e.g., fetch data, update state).
    const posts = useSelector((state) => state.posts.posts);  // useSelector() → To read data from the Redux store.
    const selectedPost = useSelector((state) => state.posts.selectedPost);


    return (
      <div>
        <h2>Posts List</h2>
        <button onClick={() => dispatch(fetchPosts())}>Fetch Posts</button>
  
        <ul>
          {posts.map((post) => (
            <li key={post.id} onClick={() => dispatch(setSelectedPost(post))}>
              {post.title}
            </li>
          ))}
        </ul>
  
        {selectedPost && (
          <div>
            <h3>Selected Post:</h3>
            <p>{selectedPost.body}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default PostsList;