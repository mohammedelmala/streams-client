import { SIGN_IN, SIGN_OUT } from "./types";

export const signIn = (userId) => {
    console.log(`${userId} Signed In`);
    return {
        type: SIGN_IN,
        payload: {
            userId: userId
        }
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};