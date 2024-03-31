import {createSlice} from "@reduxjs/toolkit";

//defining its initialState, name, reducer
const propertySlice = createSlice({
    name:"property",
    initialState :{
        properties:[], //array to hold fetch all the properties
        totalProperties: 0,
        searchParams:{}, //parameters used for search
        error : null, //Error state
        loading: false,//loading state
    },


    //it contains function to handle different function based on dispached update
    reducers : {
        getRequest(state){
            state.loading = true;
        },
        //to update state to fetched data, reducer funtion(responsable for state)
        getProperties(state, action){
            state.properties = action.payload.data;
            state.totalProperties = action.payload.all_properties;
            state.loading = false;
        },

        //Action to update search parameters
        updateSearchParams: (state, action)=>{
            state.searchParams = 
            Object.keys(action.payload).length === 0
            ? {}
            : {
                ...state.searchParams,
                ...action.payload,
            };
        },

        //action to update error states
        getErrors(state, action) {
            state.error = action.payload;
        },
    },
});

export const propertyAction = propertySlice.actions;

export default propertySlice;