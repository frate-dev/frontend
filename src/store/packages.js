import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    packages : [],
};
export const packageSlice = createSlice({
    name:"packages",
    initialState,
    reducers:{
        clearState:(state)=>state.packages = []

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getAllPackages.fulfilled, (state, action)=>{
            state.packages = action.payload;
        })
    }
});

export const getAllPackages = createAsyncThunk(
    "packages/getAllPackages",
    async(_,{rejectWithValue})=>{
        const res = await axios.get("https://github.com/cmaker-dev/index/releases/latest/download/index.json",{
            headers:{
                "Content-Type":"application/json"
            }
        });

        if(!res.ok){
            rejectWithValue(await res.json());
        }
        const data = await res.json();
        return data;
    }
)


export const {clearState} = packageSlice.actions;
export default packageSlice.reducer;
