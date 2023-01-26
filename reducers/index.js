import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  user: {
    isLoggedIn: false,
    me: null
  },
  post: {
    mainPosts: []
  }
}

export const loginAction = (data) => {
  return {
    type: 'LOG_IN',
    data
  }
}

export const logoutAction = {
  type: 'LOG_OUT',
}

const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case HYDRATE:
      console.log('HYDRATE', action);
      return {
        ...state, ...action.payload
      }
    case 'LOG_IN':
      return {
        ...state, 
        user: {
          ...state.user,
          isLoggedIn: true,
          me: action.data
        }
      }
    case 'LOG_OUT':
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
          me: null
        }
      }
    default:
      return state;
  }
}

export default rootReducer;