import axios from 'axios';
import PostObj from './PostObj';

const BASE_URL = 'https://nathanconroydev.pythonanywhere.com';
export const POSTS_URL = `${BASE_URL}/posts`;

/*
 * Sorts posts by date.
 */
function sortPosts(posts) {
    return posts.sort((a, b) => b.date - a.date);
}


/*
 * Takes the server response and returns list of posts.
 */
function prepRespPosts(resp) {
  return sortPosts(resp.data.map(
    (post) => new PostObj(post.id, post.title, post.author, post.content, post.date)
  ));
}


/*
 * Retrieves all blog posts.
 */
export async function retrievePosts() {
  return axios.get(POSTS_URL)
    .then((resp) => prepRespPosts(resp));
}

/*
 * *** UNDER DEVELOPMENT - NOT READY FOR USE ***
 *
 * Retrieves About Page content.
 */
export async function retrieveAbout() {
  return axios.get()
}


export default retrievePosts;
