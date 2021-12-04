import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { render, screen, act } from '@testing-library/react';
import { POSTS_URL } from './const';

import App from './App';

const OK = 200;

const TEST_POSTS = [
  {
    id: 1,
    author: 'Author',
    date: '2021-01-01',
    title: 'First post.',
    content: 'blog content'
  },
  {
    id: 2,
    author: 'Author',
    date: '2021-01-02',
    title: 'Second post.',
    content: 'blog content'
  }
];


describe("App", () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it('renders', async () => {
    await act(async () => {
      mock.onGet(POSTS_URL).reply(OK, TEST_POSTS);
      render(<App />);
    })
  });
});

