import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    packages : [],
    err: ""
};
export const packageSlice = createSlice({
    name:"packages",
    initialState,
    reducers:{
        clearState:(state)=>state.packages = [],
        // add searches
        //add filters
        //-- score
        //-- above score
        //-- below score
        //-- find word in package
        //-- search by stars
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getAllPackages.fulfilled, (state, action)=>{
            state.packages = action.payload;
        })
        .addCase(getAllPackages.rejected,(state, action)=>{
            state.packages = [];
            state.err = action.payload;
        })
    }
});

export const getAllPackages = createAsyncThunk(
    "packages/getAllPackages",
    async(_,{rejectWithValue})=>{


    const res = fetch('../../public/index.json').then(response => {
        return response.json();
      }).then(data => {
        return data;
      })
  
        
        if(!res.ok){
            rejectWithValue(await res);
        }
        const data = await res;
       
        return data;
    }
)


export const {clearState} = packageSlice.actions;
export default packageSlice.reducer;
