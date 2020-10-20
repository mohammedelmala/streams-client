import { SIGN_IN, SIGN_OUT } from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case SIGN_IN:
            console.log(action.payload);
            return { ...state, isUserSignedIn: true, userId: action.payload.userId };
        case SIGN_OUT:
            return { ...state, isUserSignedIn: false, userId: null }
        default:
            return state;
    }
}