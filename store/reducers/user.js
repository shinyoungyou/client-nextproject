import produce from 'immer';

import shortId from 'shortid';
import { faker } from '@faker-js/faker/locale/en_CA';

import {
  LogInActionType,
  LogOutActionType,
  SignUpActionType,
  FollowActionType,
  UnfollowActionType,
  ChangeNicknameActionType,
  AddPostToMeActionType,
  RemovePostOfMeActionType,
  NavigateProfileActionType,
} from '../action-types/user';

export const initialState = {
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  followLoading: false,
  followDone: false,
  followError: null,
  unfollowLoading: false,
  unfollowDone: false,
  unfollowError: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,
  navigateProfile: 0,
  my: null,
  User: [
    {
      id: 1,
      username: "Shrimp and Chorizo Paella",
      email: "shrimp@gmail.com",
      pass: "test1",
      Followings: null,
      Followers: null,
      Posts: null
    },
    {
      id: 2,
      username: "Mary S Bing",
      email: "msbing@gmail.com",
      pass: "test2",
      Followings: null,
      Followers: null,
      Posts: null
    },
    {
      id: 3,
      username: "Rose A Kramer",
      email: "rose@gmail.com",
      pass: "test3",
      Followings: null,
      Followers: null,
      Posts: null
    },
    {
      id: 4,
      username: "Joy T Jones",
      email: "joy@gmail.com",
      pass: "test4",
      Followings: null,
      Followers: null,
      Posts: null
    },
  ]
}

const reducer = (state = initialState, action) => produce(state, (draft)=>{
  switch (action.type){
    case LogInActionType.LOG_IN_REQUEST:
      draft.logInLoading = true;
      draft.logInDone = false;
      draft.logInError = null;
      break;
    case LogInActionType.LOG_IN_SUCCESS:
      draft.logInLoading = false;
      draft.my = action.data;
      draft.logInDone = true;
      break;
    case LogInActionType.LOG_IN_FAILURE:
      draft.logInLoading = false;
      draft.logInError = action.error;
      break;
    case LogOutActionType.LOG_OUT_REQUEST:
      draft.logOutLoading = true;
      draft.logOutDone = false;
      draft.logOutError = null;
      break;
    case LogOutActionType.LOG_OUT_SUCCESS:
      draft.my = null;
      draft.logOutLoading = false;
      draft.logOutDone = true;
      break;
    case LogOutActionType.LOG_OUT_FAILURE:
      draft.logOutLoading = false;
      draft.logOutError = action.error;
      break;
    case SignUpActionType.SIGN_UP_REQUEST:
      draft.signUpLoading = true;
      draft.signUpDone = false;
      draft.signUpError = null;
      break;
    case SignUpActionType.SIGN_UP_SUCCESS:
      draft.signUpLoading = false;
      draft.signUpDone = true;
      break;
    case SignUpActionType.SIGN_UP_FAILURE:
      draft.signUpLoading = false;
      draft.signUpError = action.error;
      break;
    case FollowActionType.FOLLOW_REQUEST:
      draft.followLoading = true;
      draft.followDone = false;
      draft.followError = null;
      break;
    case FollowActionType.FOLLOW_SUCCESS:
      draft.my.Followings.unshift({ id: action.data.id, username: action.data.username });
      draft.followLoading = false;
      draft.followDone = true;
      break;
    case FollowActionType.FOLLOW_FAILURE:
      draft.followLoading = false;
      draft.followError = action.error;
      break;
    case UnfollowActionType.UNFOLLOW_REQUEST:
      draft.unfollowLoading = true;
      draft.unfollowDone = false;
      draft.unfollowError = null;
      break;
    case UnfollowActionType.UNFOLLOW_SUCCESS:
      draft.my.Followings = draft.my.Followings.filter((user) => user.id !== action.data);
      draft.unfollowLoading = false;
      draft.unfollowDone = true;
      break;
    case UnfollowActionType.UNFOLLOW_FAILURE:
      draft.unfollowLoading = false;
      draft.unfollowError = action.error;
      break;
    case ChangeNicknameActionType.CHANGE_NICKNAME_REQUEST:
      draft.changeNicknameLoading = true;
      draft.changeNicknameDone = false;
      draft.changeNicknameError = null;
      break;
    case ChangeNicknameActionType.CHANGE_NICKNAME_SUCCESS:
      draft.changeNicknameLoading = false;
      draft.changeNicknameDone = true;
      break;
    case ChangeNicknameActionType.CHANGE_NICKNAME_FAILURE:
      draft.changeNicknameLoading = false;
      draft.changeNicknameError = action.error;
      break;
    case AddPostToMeActionType.ADD_POST_TO_ME:
      draft.my.Posts.unshift({ id: action.data });
      break;
    case RemovePostOfMeActionType.REMOVE_POST_OF_ME:
      draft.my.Posts = draft.my.Posts.filter((post) => post.id !== action.data);
      break;
    case NavigateProfileActionType.NAVIGATE_PROFILE:
      draft.navigateProfile = action.data
      break;
    default:
      return state;
  }
})

export const dummyMy = {
  id: shortId.generate(),
  username: faker.name.fullName(),
  email: faker.internet.email(),
  pass: faker.internet.password(),
  Followings: [],
  Followers: [],
  Posts: []
}

export default reducer;