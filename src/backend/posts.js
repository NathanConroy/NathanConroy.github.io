/*
 * This file contains functions for fetching
 * blog posts from the backend.
 */
import axios from 'axios';

import { getPostsURL } from './urls';

const dtFmt = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })

function make_sections(sections) {
  return sections.map(s => new Section(s.type, s.content));
}

/*
 * Class that contains all the data related to a single
 * blog post.
 */
class PostObj {
  constructor(id, title, author, sections, date) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.sections = make_sections(sections);
    this.date = Date.parse(date);
  }

  get dateStr() {
    return dtFmt.format(this.date);
  }
}

class Section {
  constructor(type, content) {
    this.type = type;
    this.content = content;
  }
}

/*
 * Sorts posts by date.
 */
function sortPosts(posts) {
    return posts.sort((a, b) => b.date - a.date);
}

/*
 * Takes JSON list of posts and returns list of Post objects.
 */
export function postsFromJson(json_data) {
  return sortPosts(json_data.map(
    (post) => new PostObj(post.id, post.title, post.author, post.sections, post.date)
  ));
}

/*
 * Retrieves all blog posts.
 */
export async function retrievePosts() {
  return axios.get(getPostsURL())
    .then((resp) => postsFromJson(resp.data));
}
