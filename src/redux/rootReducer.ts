import AuthReducer from '@corporateFoods/modules/auth/reducer';
import SplashReducer from '@corporateFoods/modules/splash/reducer';
import {LOGOUT, RESET_STORE} from '@corporateFoods/utils/actionTypes';
import {combineReducers} from 'redux';

const RootReducer = combineReducers({AuthReducer, SplashReducer});
const rootReducer = (state: any, action: any) => {
  if (action.type === RESET_STORE) {
    state = undefined;
    const res = RootReducer(state, action);
    return res;
  }
  if (action.type === LOGOUT) {
    state = {SplashReducer};
    const res = RootReducer(state, action);
    return res;
  }

  return RootReducer(state, action);
};
export default rootReducer;
