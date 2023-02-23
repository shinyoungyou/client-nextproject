import { Post } from './post';

export default interface UserState {
  logInLoading: boolean;
  logInDone: boolean;
  logInError: string | null;
  logOutLoading: boolean;
  logOutDone: boolean;
  logOutError: string | null;
  signUpLoading: boolean;
  signUpDone: boolean;
  signUpError: string | null;
  followLoading: boolean;
  followDone: boolean;
  followError: string | null;
  unfollowLoading: boolean;
  unfollowDone: boolean;
  unfollowError: string | null;
  changeNicknameLoading: boolean;
  changeNicknameDone: boolean;
  changeNicknameError: string | null;
  profileMenu: number;
  my: User | null; // my can be null when user is not logged in
  User: User[];
}

export interface User {
  id: number | string;
  username: string;
  email: string;
  pass: string;
  // Followings: Following[] | Partial<User>[] | [];
  Followings: Partial<User>[] | [];

  // Followers: Follower[] | Partial<User>[] | [];
  Followers: Partial<User>[] | [];

  Posts: Partial<Post>[] | [];
}

export interface Following {
  id: number;
  FollowerId: number;
  FollowingId: number;
  Following: Partial<User>;

}

export interface Follower {
  id: number;
  FollowingId: number;
  FollowerId: number;
  Follower: Partial<User>;
}