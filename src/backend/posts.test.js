import * as posts from './posts';

const EXPL_POST_JSON_LIST = [
  {
    "id": 0,
    "active": true,
    "author": "Nathan Conroy",
    "date": "2022-01-05",
    "title": "DevOps - No Blame",
    "sections": [
      {
        "type": "text",
        "content": "section 1",
      },
      {
        "type": "text", 
        "content": "section 2",
      },
    ],
  },
]

// For use in other modules' tests.
export const TEST_POST = posts.postsFromJson(EXPL_POST_JSON_LIST)[0];
export const TEST_POST_SEC1_CONTENT = TEST_POST.sections[0].content


test('test posts from json', () => {
  const ps = posts.postsFromJson(EXPL_POST_JSON_LIST);
  expect(ps).toBeInstanceOf(Array);
})
