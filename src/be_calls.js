import axios from 'axios';
import PostObj from './PostObj';

import { POSTS_URL } from './const';

/*
 * Sorts posts by date.
 */
function sortPosts(posts) {
    return posts.sort((a, b) => a.date - b.date);
}


/*
 * Takes the server response and returns list of posts.
 */
function prepRespPosts(resp) {
  return sortPosts(resp.data.map(
    (post) => new PostObj(post.id, post.title, post.author, post.content, post.date)
  ));
}


export async function retrievePosts() {
  return axios.get(POSTS_URL)
    .then((resp) => prepRespPosts(resp));
}

export default retrievePosts;
