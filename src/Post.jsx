
function Post({ post }) {
  return (
    <div className="post">
      <PostHdr title={post.title} />
      <PostTimeStamp date={post.date} />
      <PostContent content={post.content} />
    </div>
  );
}

function PostHdr({ title }) {
    return <h2>{title}</h2>
}

function PostTimeStamp({ date }) {
    return <h3>{date}</h3>;
}


function PostContent({ content }) {
    return <p>{content}</p>;
}

export default Post;
