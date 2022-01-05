import { Fragment, useState, useEffect } from 'react';

import Post from './Post';
import { retrievePosts } from './backend/urls';

/*
 * Fetch posts from the backend.
 */
function fetchPosts(setPosts) {
  // TODO: handle timeout gracefully & test
  return retrievePosts()
    .then((posts) => { setPosts(posts); })
    .catch(); // TODO: handle exception & test
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

/*
 * JSX containing Posts.
 */
function Posts() {
  const posts = usePosts();
  return (
    <>
      { posts.map((post) => <Post key={post.id.toString()} post={post} />) }
    </>
  );
}

export default Posts;
