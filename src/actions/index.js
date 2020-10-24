import { SIGN_IN, SIGN_OUT, FETCH_STREAMS, FETCH_STREAM, EDIT_STREAM, DELETE_STREAM, CREATE_STREAM } from "./types";

import history from "../history";


import streams from "../apis/streams";

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


export const streamCreate = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post("/streams", { ...formValues, userId });
    dispatch({ type: CREATE_STREAM, payload: response.data });
    history.push("/");

}



export const fetchStreams = () => async dispatch => {
    const response = await streams.get("/streams");
    dispatch({ type: FETCH_STREAMS, payload: response.data });

}

export const fetchStream = id => async dispatch => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({ type: FETCH_STREAM, payload: response.data });
}

export const editStream = formValues => async dispatch => {
    const response = await streams.post(`/streams/${formValues.id}`, formValues);
    dispatch({ type: EDIT_STREAM, payload: response.data });

}

export const deleteStream = id => async dispatch => {
    await streams.delete(`/streams/${id}`);
    dispatch({ type: DELETE_STREAM })
}