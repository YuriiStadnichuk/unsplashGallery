import * as types from './types';
import unsplashApi from 'api';

const startLoading = {
  type: types.SET_LOADING,
  payload: true,
};

const finishLoading = {
  type: types.SET_LOADING,
  payload: false,
};

export const fetchGalleryListing = () => async dispatch => {
  try {
    dispatch(startLoading);

    const response = await unsplashApi.get('?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0');
    // ?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0
    // ?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9
    // ?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043
    dispatch({
      type: types.FILL_GALLERYLISTING,
      payload: response.data,
    });
  } catch (e) {
    // console.log(e);
  } finally {
    dispatch(finishLoading);
  }
};




