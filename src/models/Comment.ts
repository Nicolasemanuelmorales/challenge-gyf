export default class Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
  constructor(params: Comment) {
    this.id = params.id;
    this.postId = params.postId;
    this.name = params.name;
    this.email = params.email;
    this.body = params.body;
  }
}
