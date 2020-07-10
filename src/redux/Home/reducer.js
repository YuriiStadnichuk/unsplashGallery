import * as types from './types';

const initState = {
  isLoading: false,
  gallery: [],



};

const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      }
    }

    case types.FILL_GALLERYLISTING: {
      return {
        ...state,
        gallery: action.payload,
      };
    }

      default: {
      return state;
    }
  }
};

export default homeReducer;
