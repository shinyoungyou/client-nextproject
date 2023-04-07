import { Post } from './post';

export default interface UserState {
  loadMyInfoLoading: boolean;
  loadMyInfoDone: boolean;
  loadMyInfoError: string | null;
  loadSingleUserLoading: boolean;
  loadSingleUserDone: boolean;
  loadSingleUserError: string | null;
  logInLoading: boolean;
  logInDone: boolean;
  logInError: string | null;
  logOutLoading: boolean;
  logOutDone: boolean;
  logOutError: string | null;
  signUpLoading: boolean;
  signUpDone: boolean;
  signUpError: string | null;
  changeUsernameLoading: boolean;
  changeUsernameDone: boolean;
  changeUsernameError: string | null;
  loadFollowingsLoading: boolean;
  loadFollowingsDone: boolean;
  loadFollowingsError: string | null;
  followLoading: boolean;
  followDone: boolean;
  followError: string | null;
  unfollowLoading: boolean;
  unfollowDone: boolean;
  unfollowError: string | null;
  loadFollowersLoading: boolean;
  loadFollowersDone: boolean;
  loadFollowersError: string | null;
  removeFollowerLoading: boolean;
  removeFollowerDone: boolean;
  removeFollowerError: string | null;
  profileMenu: number;
  my: User | null; // my can be null when user is not logged in
  singleUser: User | null;
  User: User[];
}

export interface User {
  id: number;
  username: string;
  email: string;
  pass: string | null;
  Followings: Partial<User>[] | [];
  Followers: Partial<User>[] | [];
  Posts: Partial<Post>[] | [];
}

export interface Following {
  FollowerId: number;
  FollowingId: number;
  createdAt: string;
  updatedAt: string;
}

export interface Follower {
  FollowingId: number;
  FollowerId: number;
  createdAt: string;
  updatedAt: string;
}