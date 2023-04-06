import {SET_LOADING} from '@corporateFoods/utils/actionTypes';
import {SplashModal, ActionType} from '@corporateFoods/utils/modal';

const SplashReducer = (
  state: SplashModal = new SplashModal(),
  action: ActionType,
) => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, ...action.payload};
    default:
      return state;
  }
};
export default SplashReducer;
