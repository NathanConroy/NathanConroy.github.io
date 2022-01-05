import axios from 'axios';
import PostObj from './PostObj';

const BASE_URL = 'https://nathanconroydev.pythonanywhere.com';
export const POSTS_URL = `${BASE_URL}/posts`;
export const ABOUT_URL = `${BASE_URL}/about`;


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
 * Return URL for requesting blog posts.
 */
function getPostsURL() {
  return POSTS_URL;
}

/*
 * Return URL for requesting the "about" page.
 */
function getAboutURL() {
  return ABOUT_URL;
}


/*
 * Retrieves all blog posts.
 */
export async function retrievePosts() {
  return axios.get(getPostsURL())
    .then((resp) => prepRespPosts(resp));
}

/*
 * Retrieves About Page content.
 */
export async function retrieveAbout() {
  return axios.get(getAboutURL());
}


export default retrievePosts;
