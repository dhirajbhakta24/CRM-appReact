import {createSlice} from '@reduxjs/toolkit';

const initialState ={
    role: localStorage.getItem("role") || "",
    data : localStorage.getItem("data") || {},
    isLoggedIn : localStorage.getItem("isLoggedin") || false
}

const authSlice =createSlice({
    name :'auth',
    initialState,
    reducers:{}

});

export default authSlice.reducer;