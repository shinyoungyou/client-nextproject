import { Action } from 'redux';

import {
    LoadPostsActionType,
    AddPostActionType,
    RemovePostActionType,
    AddCommentActionType,
    RemoveCommentActionType,
    LikePostActionType,
    UnlikePostActionType
} from "../action-types/post";
import User from '../state-types/user';
import { Comment } from '../state-types/post';

export interface loadPostsRequestAction extends Action {
  type: LoadPostsActionType.LOAD_POSTS_REQUEST,
}

export interface addPostRequestAction extends Action {
  type: AddPostActionType.ADD_POST_REQUEST,
  data: {
    content: string,
    userId: number | string,
    User: Partial<User>
  }
}

export interface removePostRequestAction extends Action {
  type: RemovePostActionType.REMOVE_POST_REQUEST,
  data: number | string,
}

export interface addCommentRequestAction extends Action {
  type: AddCommentActionType.ADD_COMMENT_REQUEST,
  data: {
    content: string,
    postId: number | string,
    userId: number | string,
    User: Partial<User>
  }
}

export interface removeCommentRequestAction extends Action {
  type: RemoveCommentActionType.REMOVE_COMMENT_REQUEST,
  data: Partial<Comment>
}


export interface likePostRequestAction extends Action {
  type: LikePostActionType.LIKE_POST_REQUEST,
  data: {
    postId: number | string,
    userId: number | string,
  }
}

export interface unlikePostRequestAction extends Action {
  type: UnlikePostActionType.UNLIKE_POST_REQUEST,
  data: {
    postId: number | string,
    userId: number | string,
  }
}