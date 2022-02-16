const BASE_URL = 'https://nathanconroydev.pythonanywhere.com';
export const POSTS_URL = `${BASE_URL}/posts?version=v2`;
export const ABOUT_URL = `${BASE_URL}/about`;

/*
 * Return URL for requesting blog posts.
 */
export function getPostsURL() {
  return POSTS_URL;
}

/*
 * Return URL for requesting the "about" page.
 */
export function getAboutURL() {
  return ABOUT_URL;
}
