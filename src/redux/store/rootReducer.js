import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';


import homeReducer from '../Home';
import offersReducer from '../Offers';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['auth'],
  // blacklist: [],
};

const rootReducer = combineReducers({
  home: homeReducer,
  offers: offersReducer,
  
});

export default persistReducer(persistConfig, rootReducer);
