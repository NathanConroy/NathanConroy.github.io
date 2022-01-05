/*
 * This file contains functions for fetching
 * blog posts from the backend.
 */
import axios from 'axios';

import { getPostsURL } from './urls';

const dtFmt = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })

/*
 * Class that contains all the data related to a single
 * blog post.
 */
class PostObj {
  constructor(id, title, author, content, date) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.content = content;
    this.date = Date.parse(date);
  }

  get dateStr() {
    return dtFmt.format(this.date);
  }
}

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
