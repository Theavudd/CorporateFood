export type ActionType = {
  type: string;
  payload: any;
};

export class AuthModal {
  authToken: string = '';
  name: string = '';
  accountType: number = 1;
  email: string = '';
  employeeId: string = '';
  companyName: string = '';
  userId: string = '';
}
export class SplashModal {
  isLoading: boolean = true;
}

export type ReducersModal = {
  AuthReducer: AuthModal;
  SplashReducer: SplashModal;
};
