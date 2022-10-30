import { useMediaQuery } from 'react-responsive'

const FIRST_SECTION = 0;

const MOBILE_POST_MOD = 'post--mobile';
const DEF_POST_MOD = 'post--desktop-laptop-or-tablet';

function postStyleModifier(isMobile) {
  if (isMobile) {
    return MOBILE_POST_MOD;
  }
  return DEF_POST_MOD;
}

function postStyle(isMobile) {
  return `post ${postStyleModifier(isMobile)}`;
}

function Post({ post }) {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return (
    <div className={postStyle(isMobile)}>
      <PostHdr title={post.title} />
      <PostTimeStamp date={post.dateStr} />
      <PostContent sections={post.sections} />
    </div>
  );
}

function PostHdr({ title }) {
  return <h2>{title}</h2>
}

function PostTimeStamp({ date }) {
  return <h3>{date}</h3>;
}


function PostContent({ sections }) {
  return <p>{sections[FIRST_SECTION].content}</p>;
}

export default Post;
