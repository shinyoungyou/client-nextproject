import { User } from './user';

export default interface PostState {
    bringMorePosts: boolean,
    loadPostsLoading: boolean,
    loadPostsDone: boolean,
    loadPostsError: ErrorEvent | null,
    addPostLoading: boolean,
    addPostDone: boolean,
    addPostError: ErrorEvent | null,
    removePostLoading: boolean,
    removePostDone: boolean,
    removePostError: ErrorEvent | null,
    addCommentLoading: boolean,
    addCommentDone: boolean,
    addCommentError: ErrorEvent | null,
    removeCommentLoading: boolean,
    removeCommentDone: boolean,
    removeCommentError: ErrorEvent | null,
    likePostLoading: boolean,
    likePostDone: boolean,
    likePostError: ErrorEvent | null,
    unlikePostLoading: boolean,
    unlikePostDone: boolean,
    unlikePostError: ErrorEvent | null,
    mainPosts: Post[],
    imagePaths: ImagePath[]
}

export interface Post {
    id: string;
    content: string;
    createdAt: string;
    User: Partial<User>,
    Likes: Like[] | [];
    RetweetId?: number;
    Retweet: [];
    Images: Image[] | [];
    Comments: Comment[] | [];
}
export interface Like {
    id: string;
    postId: string;
    userId: string;
}

export interface Comment {
    id: string;
    content: string;
    createdAt: string;
    User: Partial<User>;
}

export interface Image {
    src: string;
    alt: string;
}

export interface ImagePath {
    src: string,
    file: File
}