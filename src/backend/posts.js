/*
 * This file contains functions for fetching
 * blog posts from the backend.
 */
import axios from 'axios';

import { getPostsURL, getAboutURL } from './urls';
import PostObj from '../PostObj';

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
  return axios.get(getPostsURL())
    .then((resp) => prepRespPosts(resp));
}

/*
 * Retrieves About Page content.
 * TODO: put in its own file.
 */
export async function retrieveAbout() {
  return axios.get(getAboutURL());
}
