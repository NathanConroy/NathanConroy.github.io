
/*
 * Class that contains all the data related to a single
 * blog post.
 */
class PostObj {
  constructor(id, title, author, content, date) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.content = content;
    this.date = date;
  }
}

export default PostObj;
