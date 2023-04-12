import Endpoints from '@corporateFoods/utils/Endpoints';
import Services from '@corporateFoods/utils/Services';
import {SET_DATA} from '@corporateFoods/utils/actionTypes';
import {Dispatch} from 'redux';

export const userSignup = (
  params: any,
  successCallback: (arg: any) => void,
  failureCallback: (arg: any) => void,
) => {
  return (dispatch: Dispatch) => {
    Services.postApiCall(
      Endpoints.signUp,
      params,
      (res: any) => {
        dispatch({type: SET_DATA, payload: {...res?.data}});
        successCallback(res);
      },
      (err: any) => {
        failureCallback(err);
      },
    );
  };
};

export const userLogin = (
  params: any,
  successCallback: (res: any) => void,
  failureCallback: (err: any) => void,
) => {
  return (dispatch: Dispatch) => {
    Services.postApiCall(
      Endpoints.login,
      params,
      (res: any) => {
        dispatch({type: SET_DATA, payload: {...res?.data}});
        successCallback(res);
      },
      (err: any) => {
        failureCallback(err);
      },
    );
  };
};
