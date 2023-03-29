import { combineReducers } from "redux";

const RootReducer = combineReducers({})
const rootReducer=(state:any,action:any)=>{
    if (action.type === 'Reset Store') {
        state = undefined;
        const res = RootReducer(state, action);
        return res;
      }
      return RootReducer(state, action);
}
export default rootReducer