import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { logIn, logOut, signUp, follow, unfollow, changeNickname } from "../thunks/user";

const userSlice = createSlice({
  name: 'user',
  initialState: {
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
    profileMenu: 0,
    my: null,
    User: []
  },
  reducers: {
    addPostToMe(state, action) {
      state.my.Posts.unshift({ id: action.payload });
    },
    removePostToMe(state, action) {
      state.my.Posts = state.my.Posts.filter((post) => post.id !== action.payload);
    },
    navigateProfile(state, action){
      state.profileMenu = action.payload
    },
  },
  extraReducers(builder) {
    // builder.addCase(HYDRATE, (state, action) => {
    //   return {
    //     ...state,
    //     ...action.payload.user,
    //   }
    // })
   builder.addCase(logIn.pending, (state, action)=>{
      state.logInLoading = true;
      state.logInDone = false;
      state.logInError = null;
    })
   builder.addCase(logIn.fulfilled, (state, action)=>{
      state.logInLoading = false;
      state.my = action.payload;
      state.logInDone = true;
    })
   builder.addCase(logIn.rejected, (state, action)=>{
     state.logInLoading = false;
     state.logInError = action.payload;
    })
   builder.addCase(logOut.pending, (state, action)=>{
      state.logOutLoading = true;
      state.logOutDone = false;
      state.logOutError = null;
    })
   builder.addCase(logOut.fulfilled, (state, action)=>{
      state.my = null;
      state.logOutLoading = false;
      state.logOutDone = true;
    })
   builder.addCase(logOut.rejected, (state, action)=>{
      state.logOutLoading = false;
      state.logOutError = action.payload;
    })
   builder.addCase(signUp.pending, (state, action)=>{
      state.signUpLoading = true;
      state.signUpDone = false;
      state.signUpError = null;
    })
   builder.addCase(signUp.fulfilled, (state, action)=>{
      state.signUpLoading = false;
      state.signUpDone = true;
    })
   builder.addCase(signUp.rejected, (state, action)=>{
      state.signUpLoading = false;
      state.signUpError = action.payload;
    })
   builder.addCase(follow.pending, (state, action)=>{
      state.followLoading = true;
      state.followDone = false;
      state.followError = null;
    })
   builder.addCase(follow.fulfilled, (state, action)=>{
      state.my.Followings.unshift({ id: action.payload.id, username: action.payload.username });
      state.followLoading = false;
      state.followDone = true;
    })
   builder.addCase(follow.rejected, (state, action)=>{
      state.followLoading = false;
      state.followError = action.payload;
    })
   builder.addCase(unfollow.pending, (state, action)=>{
      state.unfollowLoading = true;
      state.unfollowDone = false;
      state.unfollowError = null;
    })
   builder.addCase(unfollow.fulfilled, (state, action)=>{
      state.my.Followings = state.my.Followings.filter((user) => user.id !== action.payload);
      state.unfollowLoading = false;
      state.unfollowDone = true;
    })
   builder.addCase(unfollow.rejected, (state, action)=>{
      state.unfollowLoading = false;
      state.unfollowError = action.payload;
    })
   builder.addCase(changeNickname.pending, (state, action)=>{
      state.changeNicknameLoading = true;
      state.changeNicknameDone = false;
      state.changeNicknameError = null;
    })
   builder.addCase(changeNickname.fulfilled, (state, action)=>{
      state.changeNicknameLoading = false;
      state.changeNicknameDone = true;
    })
   builder.addCase(changeNickname.rejected, (state, action)=>{
      state.changeNicknameLoading = false;
      state.changeNicknameError = action.payload;
    })
  }
})

export const { addPostToMe, removePostToMe, navigateProfile } = userSlice.actions
export default userSlice;