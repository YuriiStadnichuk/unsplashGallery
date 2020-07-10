import * as types from './types';

const initState = {
  isLoading: false,
  offerimages:[],

};

const offersReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      }
    }

    case types.FILL_LISTOFFERS: {
      return {
        ...state,
        offerimages: action.payload,
      };
    }


    default: {
      return state;
    }
  }
};

export default offersReducer;
