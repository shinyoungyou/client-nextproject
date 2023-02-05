import { Post } from './post';

export default interface UserState {
  logInLoading: boolean;
  logInDone: boolean;
  logInError: ErrorEvent | null;
  logOutLoading: boolean;
  logOutDone: boolean;
  logOutError: ErrorEvent | null;
  signUpLoading: boolean;
  signUpDone: boolean;
  signUpError: ErrorEvent | null;
  followLoading: boolean;
  followDone: boolean;
  followError: ErrorEvent | null;
  unfollowLoading: boolean;
  unfollowDone: boolean;
  unfollowError: ErrorEvent | null;
  changeNicknameLoading: boolean;
  changeNicknameDone: boolean;
  changeNicknameError: ErrorEvent | null;
  navigateProfile: number;
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