import { SIGN_IN } from "../../StoreConstants/AuthConstants";
const initialState = {
    user: null
}
const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}
export default AuthReducer