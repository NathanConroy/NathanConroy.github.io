
function Post({ post }) {
  return (
    <div className="post">
      <PostHdr />
      <PostTimeStamp />
    </div>
  );
}

function PostHdr() {
    return <h2>I am a post!</h2>
}

function PostTimeStamp() {
    return <h3>August 7th, 2021</h3>;
}

export default Post;
