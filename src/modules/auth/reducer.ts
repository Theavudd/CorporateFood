import {SET_DATA} from '@corporateFoods/utils/actionTypes';
import {AuthModal, ActionType} from '@corporateFoods/utils/modal';

const AuthReducer = (
  state: AuthModal = new AuthModal(),
  action: ActionType,
) => {
  switch (action.type) {
    case SET_DATA:
      return {...state, ...action.payload};
    default:
      return state;
  }
};
export default AuthReducer;
