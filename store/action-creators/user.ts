import {
  FollowActionType,
  LogInActionType,
  LogOutActionType,
  SignUpActionType,
  UnfollowActionType,
  NavigateProfileActionType
} from "../action-types/user";
import {
  FollowRequestAction,
  LoginRequestAction, LogoutRequestAction,
  NavigateProfileAction,
  SignupRequestAction,
  UnfollowRequestAction
} from "../actions/user";
import User from "../types/user";

export const loginRequest = (form: { email: string, pass: string }): LoginRequestAction => {
  return {
    type: LogInActionType.LOG_IN_REQUEST,
    data: form
  }
}

export const logoutRequest: LogoutRequestAction = {
  type: LogOutActionType.LOG_OUT_REQUEST,
}

export const signupRequest = (form: {
  email: string,
  username: string,
  pass: string
}): SignupRequestAction => {
  return {
    type: SignUpActionType.SIGN_UP_REQUEST,
    data: form
  }
}

export const followRequest = (user: Partial<User>): FollowRequestAction => {
  return {
    type: FollowActionType.FOLLOW_REQUEST,
    data: user
  }
}

export const unfollowRequest = (id: number | string): UnfollowRequestAction => {
  return {
    type: UnfollowActionType.UNFOLLOW_REQUEST,
    data: id
  }
}

export const navigateProfileActionCreator = (newValue: number): NavigateProfileAction => {
  return {
    type: NavigateProfileActionType.NAVIGATE_PROFILE,
    data: newValue
  }
}