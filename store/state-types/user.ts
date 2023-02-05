import Post from './post';

export default interface User {
    id: number | string;
    username: string;
    email: string;
    pass: string;
    Followings: Following[] | Partial<User>[] | [];
    Followers: Follower[] | Partial<User>[] | [];
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