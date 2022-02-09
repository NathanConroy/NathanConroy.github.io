import * as urls from './urls';

describe('urls', () => {
  test('get url for posts', () => {
    const url = urls.getPostsURL();
    expect(typeof url).toEqual('string');
    expect(url.length).toBeGreaterThan(0);
  })

  test('get url for about page', () => {
    const url = urls.getAboutURL();
    expect(typeof url).toEqual('string');
    expect(url.length).toBeGreaterThan(0);
  })
});
