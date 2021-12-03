import { Fragment, useState, useEffect } from 'react';
import Post from './Post';

import axios from 'axios';

const POSTS_URL = 'https://nathanconroydev.pythonanywhere.com/posts';

/*
 * Fetch posts from the backend.
 */
function fetchPosts(setPosts) {
  return axios.get(POSTS_URL)
    .then((resp) => resp.data)
    .then((data) => { console.dir(data); setPosts(data); })
    .catch(); // TODO: handle exception
}

/*
 * Returns lists of posts.
 */
function usePosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts(setPosts);
  }, [])
  return posts;
}


function Posts() {
  const posts = usePosts();
  return (
    <>
      { posts.map((post) => <Post />) }
    </>
  );
}

export default Posts;
