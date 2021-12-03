import { Fragment, useState, useEffect } from 'react';
import Post from './Post';
import { retrievePosts } from './be_calls';

/*
 * Fetch posts from the backend.
 */
function fetchPosts(setPosts) {
  return retrievePosts()
    .then((resp) => resp.data)
    .then((data) => { setPosts(data); })
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
      { posts.map((post) => <Post post={post} />) }
    </>
  );
}

export default Posts;
