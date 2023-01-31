import produce from 'immer';

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

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

export const loginRequestAction = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data
  }
}

export const logoutRequestAction = {
  type: LOG_OUT_REQUEST,
}

export const signupRequestAction = (data) => {
  return {
    type: SIGN_UP_REQUEST,
    data
  }
}

export const followRequestAction = (data) => {
  return {
    type: FOLLOW_REQUEST,
    data
  }
}

export const unfollowRequestAction = (data) => {
  return {
    type: UNFOLLOW_REQUEST,
    data
  }
}

const reducer = (state = initialState, action) => produce(state, (draft)=>{
  switch (action.type){
    case LOG_IN_REQUEST:
      draft.logInLoading = true;
      draft.logInDone = false;
      draft.logInError = null;
      break;
    case LOG_IN_SUCCESS:
      draft.logInLoading = false;
      draft.my = action.data;
      draft.logInDone = true;
      break;
    case LOG_IN_FAILURE:
      draft.logInLoading = false;
      draft.logInError = action.error;
      break;
    case LOG_OUT_REQUEST:
      draft.logOutLoading = true;
      draft.logOutDone = false;
      draft.logOutError = null;
      break;
    case LOG_OUT_SUCCESS:
      draft.logOutLoading = false;
      draft.my = null;
      draft.logOutDone = true;
      break;
    case LOG_OUT_FAILURE:
      draft.logOutLoading = false;
      draft.logOutError = action.error;
      break;
    case SIGN_UP_REQUEST:
      draft.signUpLoading = true;
      draft.signUpDone = false;
      draft.signUpError = null;
      break;
    case SIGN_UP_SUCCESS:
      draft.signUpLoading = false;
      draft.signUpDone = true;
      break;
    case SIGN_UP_FAILURE:
      draft.signUpLoading = false;
      draft.signUpError = action.error;
      break;
    case FOLLOW_REQUEST:
      draft.followLoading = true;
      draft.followDone = false;
      draft.followError = null;
      break;
    case FOLLOW_SUCCESS:
      draft.followLoading = false;
      draft.followDone = true;
      break;
    case FOLLOW_FAILURE:
      draft.followLoading = false;
      draft.followError = action.error;
      break;
    case UNFOLLOW_REQUEST:
      draft.unfollowLoading = true;
      draft.unfollowDone = false;
      draft.unfollowError = null;
      break;
    case UNFOLLOW_SUCCESS:
      draft.unfollowLoading = false;
      draft.unfollowDone = true;
      break;
    case UNFOLLOW_FAILURE:
      draft.unfollowLoading = false;
      draft.unfollowError = action.error;
      break;
    case CHANGE_NICKNAME_REQUEST:
      draft.changeNicknameLoading = true;
      draft.changeNicknameDone = false;
      draft.changeNicknameError = null;
      break;
    case CHANGE_NICKNAME_SUCCESS:
      draft.changeNicknameLoading = false;
      draft.changeNicknameDone = true;
      break;
    case CHANGE_NICKNAME_FAILURE:
      draft.changeNicknameLoading = false;
      draft.changeNicknameError = action.error;
      break;
    default:
      return state;
  }
})

export const dummyMy =  {
  id: 1,
  username: "Shrimp and Chorizo Paella",
  email: "shrimp@gmail.com",
  pass: "test1",
  Followings: null,
  Followers: null,
  Posts: [{
    id: 1,
    content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    createdAt: "September 14, 2016",
    User: {
      id: 1,
      username: "Shrimp and Chorizo Paella"
    },
    Likers: [
      {
        id: 2
      },
      {
        id: 3
      },
      {
        id: 4
      },
    ],
    RetweetId: null,
    Retweet: null,
    Images: [{
      src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Sashimi_-_Maguro_Restaurant%2C_Bangna%2C_Bangkok_%2844856596864%29.jpg",
      alt: "Salmon_Sushi.jpg"
    }],
    Comments: [
      {
        id: 1,
        content: "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
        createdAt: "",
        User: {
          id: 2,
          username: "Mary S Bing"
        },
      },
      {
        id: 2,
        content: "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo.",
        createdAt: "",
        User: {
          id: 3,
          username: "Rose A Kramer"

        },
      },
      {
        id: 3,
        content: "Add rice and stir very gently to distribute. Top with artichokes andpeppers, and cook without stirring, until most of the liquid is absorbed,15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp andmussels, tucking them down into the rice, and cook again.",
        createdAt: "",
        User: {
          id: 4,
          username: "Joy T Jones"

        },
      },
    ]
  }]
}

export default reducer;