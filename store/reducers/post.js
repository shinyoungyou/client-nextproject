import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper';
import { loadPosts, addPost, editPost, removePost,
  addComment, editComment, removeComment, likePost, unlikePost } from "../thunks/post";

import shortId from 'shortid';
import { faker } from '@faker-js/faker/locale/en_CA';

const postSlice = createSlice({
  name: 'post',
  initialState: {
    bringMorePosts: true,
    loadPostsLoading: false,
    loadPostsDone: false,
    loadPostsError: null,
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    editPostLoading: false,
    editPostDone: false,
    editPostError: null,
    removePostLoading: false,
    removePostDone: false,
    removePostError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
    editCommentLoading: false,
    editCommentDone: false,
    editCommentError: null,
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
  },
  extraReducers(builder) {
    // builder.addCase(HYDRATE, (state, action) => {
    //   return {
    //     ...state,
    //     ...action.payload.post,
    //   }
    // })
    builder.addCase(loadPosts.pending, (state, action)=>{
      state.loadPostsLoading = true;
      state.loadPostsDone = false;
      state.loadPostsError = null;
    })
    builder.addCase(loadPosts.fulfilled, (state, action)=>{
      state.mainPosts = state.mainPosts.concat(action.payload);
      state.loadPostsLoading = false;
      state.loadPostsDone = true;
      state.bringMorePosts = state.mainPosts.length < 50;
    })
    builder.addCase(loadPosts.rejected, (state, action)=>{
      state.loadPostsLoading = false;
      state.loadPostsError = action.payload;
    })
    builder.addCase(addPost.pending, (state, action)=>{
      state.addPostLoading = true;
      state.addPostDone = false;
      state.addPostError = null;
    })
    builder.addCase(addPost.fulfilled, (state, action)=>{
      state.mainPosts.unshift(action.payload);
      state.addPostLoading = false;
      state.addPostDone = true;
    })
    builder.addCase(addPost.rejected, (state, action)=>{
      state.addPostLoading = false;
      state.addPostError = action.payload;
    })
    builder.addCase(editPost.pending, (state, action)=>{
      state.editPostLoading = true;
      state.editPostDone = false;
      state.editPostError = null;
    })
    builder.addCase(editPost.fulfilled, (state, action)=>{
      const post = state.mainPosts.find((post) => post.id === action.payload.id);
      if (post){
        post.content = action.payload.content;
        post.updatedAt = action.payload.updatedAt;
        state.editPostLoading = false;
        state.editPostDone = true;
      }
    })
    builder.addCase(editPost.rejected, (state, action)=>{
      state.editPostLoading = false;
      state.editPostError = action.payload;
    })
    builder.addCase(removePost.pending, (state, action)=>{
      state.removePostLoading = true;
      state.removePostDone = false;
      state.removePostError = null;
    })
    builder.addCase(removePost.fulfilled, (state, action)=>{
      state.mainPosts = state.mainPosts.filter((post) => post.id !== action.payload.id);
      state.removePostLoading = false;
      state.removePostDone = true;
    })
    builder.addCase(removePost.rejected, (state, action)=>{
      state.removePostLoading = false;
      state.removePostError = action.payload;
    })
    builder.addCase(addComment.pending, (state, action)=>{
      state.addCommentLoading = true;
      state.addCommentDone = false;
      state.addCommentError = null;
    })
    builder.addCase(addComment.fulfilled, (state, action)=>{
      const post = state.mainPosts.find((post) => post.id == action.payload.PostId);
      if (post){
        post.Comments.unshift(action.payload);
        state.addCommentLoading = false;
        state.addCommentDone = true;
      }
    })
    builder.addCase(addComment.rejected, (state, action)=>{
      state.addCommentLoading = false;
      state.addCommentError = action.payload;
    })
    builder.addCase(editComment.pending, (state, action)=>{
      state.editCommentLoading = true;
      state.editCommentDone = false;
      state.editCommentError = null;
    })
    builder.addCase(editComment.fulfilled, (state, action)=>{
      const post = state.mainPosts.find((post) => post.id == action.payload.PostId);
      if (post){
        const comment = post.Comments.find((comment) => comment.id == action.payload.id);
        if (comment){
          comment.content = action.payload.content;
          comment.updatedAt = action.payload.updatedAt;
          state.editCommentLoading = false;
          state.editCommentDone = true;
        }
      }
    })
    builder.addCase(editComment.rejected, (state, action)=>{
      state.editCommentLoading = false;
      state.editCommentError = action.payload;
    })
    builder.addCase(removeComment.pending, (state, action)=>{
      state.removeCommentLoading = true;
      state.removeCommentDone = false;
      state.removeCommentError = null;
    })
    builder.addCase(removeComment.fulfilled, (state, action)=>{
      const post = state.mainPosts.find((post) => post.id === action.payload.PostId);
      if (post){
        post.Comments = removeCommentOfPost.Comments.filter((comment) => comment.id !== action.payload.id);
        state.removeCommentLoading = false;
        state.removeCommentDone = true;
      }
    })
    builder.addCase(removeComment.rejected, (state, action)=>{
      state.removeCommentLoading = false;
      state.removeCommentError = action.payload;
    })
    builder.addCase(likePost.pending, (state, action)=>{
      state.likePostLoading = true;
      state.likePostDone = false;
      state.likePostError = null;
    })
    builder.addCase(likePost.fulfilled, (state, action)=>{
      const post = state.mainPosts.find((post) => post.id === action.payload.PostId);
      if (post){
        post.Likers.unshift({ id: action.payload.UserId });
        state.likePostLoading = false;
        state.likePostDone = true;
      }
    })
    builder.addCase(likePost.rejected, (state, action)=>{
      state.likePostLoading = false;
      state.likePostError = action.payload;
    })
    builder.addCase(unlikePost.pending, (state, action)=>{
      state.unlikePostLoading = true;
      state.unlikePostDone = false;
      state.unlikePostError = null;
    })
    builder.addCase(unlikePost.fulfilled, (state, action)=>{
      const post = state.mainPosts.find((post) => post.id === action.payload.PostId);
      if (post){
        post.Likers = unlikeOfPost.Likers.filter((like) => like.id !== action.payload.UserId);
        state.unlikePostLoading = false;
        state.unlikePostDone = true;
      }
    })
    builder.addCase(unlikePost.rejected, (state, action)=>{
      state.unlikePostLoading = false;
      state.unlikePostError = action.payload;
    })    
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
  Likers: []
}))

export const postMyDummyPost = (payload, id) => ({
  id,
  content: faker.lorem.paragraphs(2),
  createdAt: `${faker.date.past(10)}`.substring(0,24),
  User: {
    id: payload.userId,
    username: payload.User.username
  },
  Images: Array(Math.floor(Math.random()*4)+1).fill().map((image, index)=>({
    src: `${faker.image.cats()}?random=${Date.now()+index}`,
    alt: `Cat_0${index}`
  })),
  Comments: [],
  Likers: []
})

export const postMyDummyComment = (payload, id) => ({
  id,
  postId: payload.postId,
  content: faker.lorem.sentences(2),
  createdAt: `${faker.date.past(5)}`.substring(0,24),
  User: {
    id: payload.userId,
    username: payload.User.username
  },
})

export default postSlice;