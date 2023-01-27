export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      email: "test@test.com",
      pass: "test"
    },
    content: "test test test",
    Images: [
      {
        id: 1,
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Beef_curry_rice_003.jpg",
        alt: "Japanese Curry"
      },
      {
        id: 2,
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Sashimi_-_Maguro_Restaurant%2C_Bangna%2C_Bangkok_%2844856596864%29.jpg",
        alt: "Salmon Sushi"
      },
      {
        id: 3,
        url: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Shoyu_ramen%2C_at_Kasukabe_Station_%282014.05.05%29_1.jpg",
        alt: "Ramen"
      }
    ],
    Comments: [
      {
        id: 1,
        User: {
          id: 1
        },
        comment: "I am comment 1"
      },
      {
        id: 2,
        User: {
          id: 1
        },
        comment: "I am comment 2"
      }
    ]
  }],
  imageUpload: false,
  addPost: false,
}

const ADD_POST = 'ADD_POST';
const addPost = (data) => {
  return {
    type: ADD_POST,
    data
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case ADD_POST:
      return {
        mainPosts: [
          action.data,
          ...state.mainPosts
        ],
        addPost: true,
        ...state
      }
    default:
      return state;
  }
}

export default reducer;