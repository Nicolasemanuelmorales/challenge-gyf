import Post from "./Post";
import User from "./User";

export default class Card {
  post: Post;
  user: User;
  constructor(params: Card) {
    this.post = params.post;
    this.user = params.user;
  }
}
