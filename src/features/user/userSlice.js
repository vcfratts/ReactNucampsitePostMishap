import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null
};

const userSlice=createSlice({
    name:"user",
    initialState, 
    reducers: {
        setCurrentUser: (state, action) => {
            const newComment={
                return {...state, currentUser:action.payload}
            };
        }
    }
});