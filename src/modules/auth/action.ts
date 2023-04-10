import Endpoints from '@corporateFoods/utils/Endpoints';
import Services from '@corporateFoods/utils/Services';

const signUPFunction = (
  params: any,
  successCallback: any,
  failureCallback: any,
) => {
  Services.postApiCall(
    Endpoints.signUp,
    params,
    (res: any) => {
      successCallback();
      console.log('Res', res);
    },
    (err: any) => {
      failureCallback();
      console.log('Failure', err);
    },
  );
  // return (dispatch: any, getState: any) => {
  //   console.log('Inside return');
  //   postApiCall(
  //     Endpoints.signUp,
  //     params,
  //     (res: any) => {
  //       successCallback();
  //       console.log('Res', res);
  //     },
  //     (err: any) => {
  //       failureCallback();
  //       console.log('Failure', err);
  //     },
  //   );
  // };
};
export {signUPFunction};
