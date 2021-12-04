import { Fragment, useState, useEffect } from 'react';
import Post from './Post';
import { retrievePosts } from './be_calls';
import PostObj from './PostObj';


function sortPosts(posts) {
    return posts.sort((a, b) => a.date - b.date);
}


function prepRespPosts(resp) {
  return sortPosts(resp.data.map(
    (post) => new PostObj(post.id, post.title, post.author, post.content, post.date)
  ));
}

/*
 * Fetch posts from the backend.
 */
function fetchPosts(setPosts) {
  // TODO: handle timeout gracefully & test
  return retrievePosts()
    .then((resp) => prepRespPosts(resp))
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
