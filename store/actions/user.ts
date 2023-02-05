import { Action } from 'redux';

import {
    LogInActionType,
    LogOutActionType,
    SignUpActionType,
    FollowActionType,
    UnfollowActionType,
    NavigateProfileActionType,
} from "../action-types/user";
import { User } from "../state-types/user";

export interface LoginRequestAction extends Action {
  type: LogInActionType.LOG_IN_REQUEST,
  data: {
    email: string,
    pass: string
  }
}

export interface LogoutRequestAction extends Action {
  type: LogOutActionType.LOG_OUT_REQUEST,
}

export interface SignupRequestAction extends Action {
  type: SignUpActionType.SIGN_UP_REQUEST,
  data: {
    email: string,
    username: string,
    pass: string
  }
}

export interface FollowRequestAction extends Action {
  type: FollowActionType.FOLLOW_REQUEST,
  data: Partial<User>
}

export interface UnfollowRequestAction extends Action {
  type: UnfollowActionType.UNFOLLOW_REQUEST,
  data: number | string
}

export interface NavigateProfileAction extends Action {
  type: NavigateProfileActionType.NAVIGATE_PROFILE,
  data: number
}