import User from './user';

export default interface Post {
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