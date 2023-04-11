import Endpoints from '@corporateFoods/utils/Endpoints';
import Services from '@corporateFoods/utils/Services';
import {SET_DATA} from '@corporateFoods/utils/actionTypes';
import {Dispatch} from 'redux';

const signUPFunction = (
  params: any,
  successCallback: any,
  failureCallback: any,
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
export {signUPFunction};
