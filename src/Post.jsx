const FIRST_SECTION = 0;

function Post({ post }) {
  return (
    <div className="post">
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
