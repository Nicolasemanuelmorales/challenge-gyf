export default class Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  constructor(params: Post) {
    this.id = params.id;
    this.userId = params.userId;
    this.title = params.title;
    this.body = params.body;
  }
}
