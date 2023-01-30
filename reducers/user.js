export const initialState = {
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
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

export const loginRequestAction = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data
  }
}

export const logoutRequestAction = {
  type: LOG_OUT_REQUEST,
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case LOG_IN_REQUEST:
      console.log('reducer login');
      return {
        ...state,
        logInLoading: true,
        logInDone: false,
        logInError: null,
      }
    case LOG_IN_SUCCESS:
      return {
        ...state,
        logInLoading: false,
        my: action.data,
        logInDone: true,
      }
    case LOG_IN_FAILURE:
      return {
        ...state,
        logInLoading: false,
        logInError: action.error,
      }
    case LOG_OUT_REQUEST:
      return {
        ...state,
        logOutLoading: true,
        logOutDone: false,
        logOutError: null,
      }
    case LOG_OUT_SUCCESS:
      console.log('reducer logout');
      return {
        ...state,
        logOutLoading: false,
        logOutDone: true,
        my: null
      }
    case LOG_OUT_FAILURE:
      return {
        ...state,
        logOutLoading: false,
        logOutError: action.error,
      }
    default:
      return state;
  }
}

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