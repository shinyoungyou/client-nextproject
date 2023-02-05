import {
    LoadPostsActionType,
    AddPostActionType,
    RemovePostActionType,
    AddCommentActionType,
    RemoveCommentActionType,
    LikePostActionType,
    UnlikePostActionType
} from "../action-types/post";
import {
    addCommentRequestAction,
    addPostRequestAction, likePostRequestAction,
    loadPostsRequestAction, removeCommentRequestAction,
    removePostRequestAction, unlikePostRequestAction
} from "../actions/post";
import { User } from '../state-types/user';
import { Comment } from '../state-types/post';

export const loadPostsRequest: loadPostsRequestAction = {
  type: LoadPostsActionType.LOAD_POSTS_REQUEST,
}

export const addPostRequest = (data: {
  content: string,
  userId: number | string,
  User: Partial<User>
}): addPostRequestAction => {
  return {
    type: AddPostActionType.ADD_POST_REQUEST,
    data
  }
}

export const removePostRequest = (postId: number | string): removePostRequestAction => {
  return {
    type: RemovePostActionType.REMOVE_POST_REQUEST,
    data: postId
  }
}

export const addCommentRequest = (data: {
    content: string,
    postId: number | string,
    userId: number | string,
    User: Partial<User>
}): addCommentRequestAction => {
    return {
        type: AddCommentActionType.ADD_COMMENT_REQUEST,
        data
    }
}

export const removeCommentRequest = (comment: Partial<Comment>): removeCommentRequestAction => {
  return {
    type: RemoveCommentActionType.REMOVE_COMMENT_REQUEST,
    data: comment
  }
}


export const likePostRequest = (data: {
    postId: number | string,
    userId: number | string,
}): likePostRequestAction => {
  return {
    type: LikePostActionType.LIKE_POST_REQUEST,
    data
  }
}

export const unlikePostRequest = (data: {
    postId: number | string,
    userId: number | string,
}): unlikePostRequestAction => {
  return {
    type: UnlikePostActionType.UNLIKE_POST_REQUEST,
    data
  }
}