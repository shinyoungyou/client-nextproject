import UserState from "./user";
import PostState from "./post";

export default interface RootState {
  index: any;
  user: UserState;
  post: PostState;
}