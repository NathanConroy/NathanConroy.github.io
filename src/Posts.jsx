import { useState, useEffect } from 'react';

import Post from './Post';
import ReadingBlock from './ReadingBlock';
import { retrievePosts } from './backend/posts';

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
    <ReadingBlock>
      { posts.map((post) => <Post key={post.id.toString()} post={post} />) }
    </ReadingBlock>
  );
}

export default Posts;
