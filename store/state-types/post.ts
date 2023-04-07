import { User } from './user';

export default interface PostState {
    bringMorePosts: boolean;
    loadPostsLoading: boolean;
    loadPostsDone: boolean;
    loadPostsError: string | null;
    bringMorePostsByUser: boolean;
    loadPostsByUserLoading: boolean;
    loadPostsByUserDone: boolean;
    loadPostsByUserError: string | null;
    uploadImagesLoading: boolean;
    uploadImagesDone: boolean;
    uploadImagesError: string | null;
    addPostLoading: boolean;
    addPostDone: boolean;
    addPostError: string | null;
    loadSinglePostLoading: boolean;
    loadSinglePostDone: boolean;
    loadSinglePostError: string | null;
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
    retweetLoading: boolean;
    retweetDone: boolean;
    retweetError: string | null;
    undoRetweetLoading: boolean;
    undoRetweetDone: boolean;
    undoRetweetError: string | null;
    mainPosts: Post[];
    postsByUser: Post[] | null;
    singlePost: Post | null;
    imagePaths: ImagePath[];
}

export interface Post {
    id: number;
    content: string;
    createdAt: string;
    updatedAt: string;
    Images: Image[] | [];
    UserId: number;
    User: Partial<User>;
    Comments: Comment[] | [];
    Likers: Liker[] | [];
    RetweetId: number | null;
    Retweet: Post | null;

}

export interface Comment {
    id: number;
    PostId: number;
    content: string;
    createdAt: string;
    updatedAt: string;
    User: Partial<User>;
}

export interface Image { // addPost
    id: number;
    src: string;
    alt: string;
    createdAt: string;
    updatedAt: string;
    PostId: number;
}

// uploadImages 하고 나서 res로 받는 { src: string; }객체 -> file = null

export interface ImagePath {
    src: string;
    file: File | null;
}

// 참고: uploadImages 하기 전에 req로 Fil만 back에 줄 때 = File 객체를 씀
// ->ImagePath 라는 interface 자체를 쓰지 않음.

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