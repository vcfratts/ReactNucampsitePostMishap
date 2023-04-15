import { CAMPSITES } from "../../app/shared/CAMPSITES";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    campsitesArray: CAMPSITES
};

const campsitesSlice=createSlice({
    name: "campsites",
    initialState
});

export const campsitesReducer=campsitesSlice.reducer;

export const selectAllCampsites = (state) => {
    return CAMPSITES;
};

export const selectCampsiteById = (id) => (state) => {
    return CAMPSITES.find(
        (campsite) => campsite.id === parseInt(id)
        );
};

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured);
};

