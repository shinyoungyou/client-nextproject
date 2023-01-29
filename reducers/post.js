export const initialState = {
  mainPosts: [{
    id: 1,
    content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like. #paella #meal",
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
      },
      // {
      //   src: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Beef_curry_rice_003.jpg",
      //   alt: "Japanese_Curry.jpg",
     // },
      // {
      //   src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Shoyu_ramen%2C_at_Kasukabe_Station_%282014.05.05%29_1.jpg",
      //   alt:  "Ramen.jpg",
      // },
     //  {
     //    src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Sashimi_-_Maguro_Restaurant%2C_Bangna%2C_Bangkok_%2844856596864%29.jpg",
     //    alt: "Salmon_Sushi.jpg"
     //  },

     ],
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
  }],
  imagePaths: [{
    src: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Beef_curry_rice_003.jpg",
    file: {
      lastModified: 1670743385774,
      lastModifiedDate: "Sat Sep 24 2022 00:23:12 GMT-0700 (Pacific Daylight Time)",
      name: "Japanese_Curry.jpg",
      size: 12284,
      type: "image/jpg",
      webkitRelativePath: ""
    },
  },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Sashimi_-_Maguro_Restaurant%2C_Bangna%2C_Bangkok_%2844856596864%29.jpg",
      file: {
        lastModified: 1670743385774,
        lastModifiedDate: "Sat Sep 24 2022 00:23:12 GMT-0700 (Pacific Daylight Time)",
        name: "Salmon_Sushi.jpg",
        size: 12284,
        type: "image/jpg",
        webkitRelativePath: ""
      },
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Shoyu_ramen%2C_at_Kasukabe_Station_%282014.05.05%29_1.jpg",
      file: {
        lastModified: 1670743385774,
        lastModifiedDate: "Sat Sep 24 2022 00:23:12 GMT-0700 (Pacific Daylight Time)",
        name: "Ramen.jpg",
        size: 12284,
        type: "image/jpg",
        webkitRelativePath: ""
      }
    }],
  postAdded: false,
  commentAdded: false,
}

const ADD_POST = 'ADD_POST';
const ADD_COMMENT = 'ADD_COMMENT';

export const addPost = (data) => {
  return {
    type: ADD_POST,
    data
  }
}

export const addComment = (data) => {
  return {
    type: ADD_COMMENT,
    data
  }
}

export const dummyPost = {
  id: 2,
  content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  createdAt: "May 21, 2022",
  User: {
    id: 4,
    username: "Joy T Jones"
  },
  Likers: [
    {
      id: 2
    },
    {
      id: 3
    }
  ],
  RetweetId: null,
  Retweet: null,
  Images: [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Shoyu_ramen%2C_at_Kasukabe_Station_%282014.05.05%29_1.jpg",
      alt: "Ramen.jpg",
    },
  ],
  Comments: [
    {
      id: 1,
      content: "Add rice and stir very gently to distribute. Top with artichokes andpeppers, and cook without stirring, until most of the liquid is absorbed,15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp andmussels, tucking them down into the rice, and cook again.",
      createdAt: "",
      User: {
        id: 4,
        username: "Joy T Jones"
      },
    },
  ]
}


export const dummyComment = {
  id: 2,
  content: "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo.",
  createdAt: "",
  User: {
    id: 3,
    username: "Rose A Kramer"
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case ADD_POST:
      return {
        ...state,
        mainPosts: [
          action.data,
          ...state.mainPosts
        ],
        postAdded: true,
      }
    case ADD_COMMENT:
      return {
        ...state,
        mainPosts: [
          // action.data,
          // ...state.mainPosts
        ],
        postAdded: true,
      }
    default:
      return state;
  }
}

export default reducer;