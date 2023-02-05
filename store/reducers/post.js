import produce from 'immer';

import shortId from 'shortid';
import { faker } from '@faker-js/faker/locale/en_CA';
import {
  AddCommentActionType,
  AddPostActionType, LikePostActionType,
  LoadPostsActionType,
  RemoveCommentActionType,
  RemovePostActionType, UnlikePostActionType
} from "../action-types/post";

export const initialState = {
  bringMorePosts: true,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  removeCommentLoading: false,
  removeCommentDone: false,
  removeCommentError: null,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  mainPosts: [],
  imagePaths: [
      {
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
}

const reducer = (state = initialState, action) => produce(state, (draft)=>{
  switch (action.type){
    case LoadPostsActionType.LOAD_POSTS_REQUEST:
      draft.loadPostsLoading = true;
      draft.loadPostsDone = false;
      draft.loadPostsError = null;
      break;
    case LoadPostsActionType.LOAD_POSTS_SUCCESS:
      draft.mainPosts = draft.mainPosts.concat(action.data);
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true;
      draft.bringMorePosts = draft.mainPosts.length < 50;
      break;
    case LoadPostsActionType.LOAD_POSTS_FAILURE:
      draft.loadPostsLoading = false;
      draft.loadPostsError = action.error;
      break;
    case AddPostActionType.ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostDone = false;
      draft.addPostError = null;
      break;
    case AddPostActionType.ADD_POST_SUCCESS:
      draft.mainPosts.unshift(action.data);
      draft.addPostLoading = false;
      draft.addPostDone = true;
      break;
    case AddPostActionType.ADD_POST_FAILURE:
      draft.addPostLoading = false;
      draft.addPostError = action.error;
      break;
    case RemovePostActionType.REMOVE_POST_REQUEST:
      draft.removePostLoading = true;
      draft.removePostDone = false;
      draft.removePostError = null;
      break;
    case RemovePostActionType.REMOVE_POST_SUCCESS:
      draft.mainPosts = draft.mainPosts.filter((post) => post.id !== action.data);
      draft.removePostLoading = false;
      draft.removePostDone = true;
      break;
    case RemovePostActionType.REMOVE_POST_FAILURE:
      draft.addPostLoading = false;
      draft.addPostError = action.error;
      break;
    case AddCommentActionType.ADD_COMMENT_REQUEST:
      draft.addCommentLoading = true;
      draft.addCommentDone = false;
      draft.addCommentError = null;
      break;
    case AddCommentActionType.ADD_COMMENT_SUCCESS:
      const addCommentToPost = draft.mainPosts.find((post) => post.id === action.data.postId);
      addCommentToPost.Comments.unshift(action.data);
      draft.addCommentLoading = false;
      draft.addCommentDone = true;
      break;
    case AddCommentActionType.ADD_COMMENT_FAILURE:
      draft.addCommentLoading = false;
      draft.addCommentError = action.error;
      break;
    case RemoveCommentActionType.REMOVE_COMMENT_REQUEST:
      draft.removeCommentLoading = true;
      draft.removeCommentDone = false;
      draft.removeCommentError = null;
      break;
    case RemoveCommentActionType.REMOVE_COMMENT_SUCCESS:
      const removeCommentOfPost = draft.mainPosts.find((post) => post.id === action.data.postId);
      removeCommentOfPost.Comments = removeCommentOfPost.Comments.filter((comment) => comment.id !== action.data.id);
      draft.removeCommentLoading = false;
      draft.removeCommentDone = true;
      break;
    case RemoveCommentActionType.REMOVE_COMMENT_FAILURE:
      draft.removeCommentLoading = false;
      draft.removeCommentError = action.error;
      break;
    case LikePostActionType.LIKE_POST_REQUEST:
      draft.likePostLoading = true;
      draft.likePostDone = false;
      draft.likePostError = null;
      break;
    case LikePostActionType.LIKE_POST_SUCCESS:
      const likeToPost = draft.mainPosts.find((post) => post.id === action.data.postId);
      likeToPost.Likes.unshift(action.data);
      draft.likePostLoading = false;
      draft.likePostDone = true;
      break;
    case LikePostActionType.LIKE_POST_FAILURE:
      draft.likePostLoading = false;
      draft.likePostError = action.error;
      break;
    case UnlikePostActionType.UNLIKE_POST_REQUEST:
      draft.unlikePostLoading = true;
      draft.unlikePostDone = false;
      draft.unlikePostError = null;
      break;
    case UnlikePostActionType.UNLIKE_POST_SUCCESS:
      const unlikeOfPost = draft.mainPosts.find((post) => post.id === action.data.postId);
      unlikeOfPost.Likes = unlikeOfPost.Likes.filter((like) => like.userId !== action.data.userId);
      draft.unlikePostLoading = false;
      draft.unlikePostDone = true;
      break;
    case UnlikePostActionType.UNLIKE_POST_FAILURE:
      draft.unlikePostLoading = false;
      draft.unlikePostError = action.error;
      break;
    default:
      break;
  }
})

export const getDummyPosts = (number) => Array(number).fill().map((post, index) => ({
   id: shortId.generate(),
   content: faker.lorem.paragraphs(2),
   createdAt: `${faker.date.past(10)}`.substring(0,24),
   User: {
     id: shortId.generate(),
     username: faker.name.fullName()
   },
  Images: [{
    src: `${faker.image.cats()}?random=${Date.now()+index}`,
    alt: "cat"
  }],
  Comments: [],
  Likes: []
}))

export const postMyDummyPost = (action, id) => ({
  id,
  content: faker.lorem.paragraphs(2),
  createdAt: `${faker.date.past(10)}`.substring(0,24),
  User: {
    id: action.data.userId,
    username: action.data.User.username
  },
  Images: Array(Math.floor(Math.random()*4)+1).fill().map((image, index)=>({
    src: `${faker.image.cats()}?random=${Date.now()+index}`,
    alt: `Cat_0${index}`
  })),
  Comments: [],
  Likes: []
})

export const postMyDummyComment = (action, id) => ({
  id,
  postId: action.data.postId,
  content: faker.lorem.sentences(2),
  createdAt: `${faker.date.past(5)}`.substring(0,24),
  User: {
    id: action.data.userId,
    username: action.data.User.username
  },
})

export default reducer;

export const dummyPost = {
  id: 2,
  content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  createdAt: "May 21, 2022",
  User: {
    id: 4,
    username: "Joy T Jones"
  },
  Images: [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Shoyu_ramen%2C_at_Kasukabe_Station_%282014.05.05%29_1.jpg",
      alt: "Ramen.jpg",
    },
  ],
  // Likers: [
  //   {
  //     id: 2
  //   },
  //   {
  //     id: 3
  //   }
  // ],
  // RetweetId: null,
  // Retweet: null,
  // Comments: [
  //   {
  //     id: 1,
  //     content: "Add rice and stir very gently to distribute. Top with artichokes andpeppers, and cook without stirring, until most of the liquid is absorbed,15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp andmussels, tucking them down into the rice, and cook again.",
  //     createdAt: "",
  //     User: {
  //       id: 4,
  //       username: "Joy T Jones"
  //     },
  //   },
  // ]
}

// mainPosts: [{
//   id: 1,
//   content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like. #paella #meal",
//   createdAt: "September 14, 2016",
//   User: {
//     id: 1,
//     username: "Shrimp and Chorizo Paella"
//   },
//   Likers: [
//     {
//       id: 2
//     },
//     {
//       id: 3
//     },
//     {
//       id: 4
//     },
//   ],
//   RetweetId: null,
//   Retweet: null,
//   Images: [{
//       src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Sashimi_-_Maguro_Restaurant%2C_Bangna%2C_Bangkok_%2844856596864%29.jpg",
//       alt: "Salmon_Sushi.jpg"
//     },
//     // {
//     //   src: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Beef_curry_rice_003.jpg",
//     //   alt: "Japanese_Curry.jpg",
//    // },
//     // {
//     //   src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Shoyu_ramen%2C_at_Kasukabe_Station_%282014.05.05%29_1.jpg",
//     //   alt:  "Ramen.jpg",
//     // },
//    //  {
//    //    src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Sashimi_-_Maguro_Restaurant%2C_Bangna%2C_Bangkok_%2844856596864%29.jpg",
//    //    alt: "Salmon_Sushi.jpg"
//    //  },
//
//    ],
//   Comments: [
//     {
//       id: 1,
//       content: "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
//       createdAt: "",
//       User: {
//         id: 2,
//         username: "Mary S Bing"
//       },
//     },
//     {
//       id: 2,
//       content: "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo.",
//       createdAt: "",
//       User: {
//         id: 3,
//         username: "Rose A Kramer"
//
//       },
//     },
//     {
//       id: 3,
//       content: "Add rice and stir very gently to distribute. Top with artichokes andpeppers, and cook without stirring, until most of the liquid is absorbed,15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp andmussels, tucking them down into the rice, and cook again.",
//       createdAt: "",
//       User: {
//         id: 4,
//         username: "Joy T Jones"
//
//       },
//     },
//   ]
// }],