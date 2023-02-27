import { User } from './user';

export default interface PostState {
    bringMorePosts: boolean;
    loadPostsLoading: boolean;
    loadPostsDone: boolean;
    loadPostsError: string | null;
    addPostLoading: boolean;
    addPostDone: boolean;
    addPostError: string | null;
    editPostLoading: boolean;
    editPostDone: boolean;
    editPostError: string | null;
    removePostLoading: boolean;
    removePostDone: boolean;
    removePostError: string | null;
    addCommentLoading: boolean;
    addCommentDone: boolean;
    addCommentError: string | null;
    editCommentLoading: boolean;
    editCommentDone: boolean;
    editCommentError: string | null;
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
    id: number;
    content: string;
    createdAt: string;
    updatedAt: string;
    User: Partial<User>,
    Likers: Liker[] | [];
    // RetweetId?: number;
    // Retweet: [];
    Images: Image[] | [];
    Comments: Comment[] | [];
}

export interface Liker {
    id: number;
    Like: Like | null; // loadPosts가 아닌 경우 = null

}
export interface Like {
    UserId: number;
    PostId: number;
    createdAt: string;
    updatedAt: string;
}

export interface Comment {
    id: number;
    postId: number;
    content: string;
    createdAt: string;
    updatedAt: string;
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