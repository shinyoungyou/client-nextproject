import { User } from './user';

export default interface PostState {
    bringMorePosts: boolean;
    loadPostsLoading: boolean;
    loadPostsDone: boolean;
    loadPostsError: string | null;
    addPostLoading: boolean;
    addPostDone: boolean;
    addPostError: string | null;
    removePostLoading: boolean;
    removePostDone: boolean;
    removePostError: string | null;
    addCommentLoading: boolean;
    addCommentDone: boolean;
    addCommentError: string | null;
    removeCommentLoading: boolean;
    removeCommentDone: boolean;
    removeCommentError: string | null;
    likePostLoading: boolean;
    likePostDone: boolean;
    likePostError: string | null;
    unlikePostLoading: boolean;
    unlikePostDone: boolean;
    unlikePostError: string | null;
    mainPosts: Post[];
    imagePaths: ImagePath[];
}

export interface Post {
    id: number | string;
    content: string;
    createdAt: string;
    User: Partial<User>,
    Likes: Like[] | [];
    // RetweetId?: number;
    // Retweet: [];
    Images: Image[] | [];
    Comments: Comment[] | [];
}
export interface Like {
    id: number | string;
    postId: number | string;
    userId: number | string;
}

export interface Comment {
    id: number | string;
    postId: number | string;
    content: string;
    createdAt: string;
    User: Partial<User>;
}

export interface Image {
    src: string;
    alt: string;
}

export interface ImagePath {
    src: string;
    file: File | null;
}