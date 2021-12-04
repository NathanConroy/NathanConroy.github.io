
const dtFmt = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })

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
    this.date = Date.parse(date);
  }

  get dateStr() {
    return dtFmt.format(this.date);
  }
}

export default PostObj;
