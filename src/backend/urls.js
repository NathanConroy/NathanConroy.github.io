const BASE_URL = 'https://nathanconroydev.pythonanywhere.com';
export const POSTS_URL = `${BASE_URL}/posts`;
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

describe('urls', () => {
  test('get url for posts', () => {
    const url = getPostsURL();
    expect(typeof url).toEqual('string');
    expect(url.length).toBeGreaterThan(0);
  })

  test('get url for about page', () => {
    const url = getAboutURL();
    expect(typeof url).toEqual('string');
    expect(url.length).toBeGreaterThan(0);
  })
});
