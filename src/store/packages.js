import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    packages : [],
    err: "",
    displayPackages: []
};
export const packageSlice = createSlice({
    name:"packages",
    initialState,
    reducers:{
        clearState:(state)=>state.packages = [],
        filterForWord:(state)=>state.displayPackages = state.packages.filter((i, word)=>i.name.includes(word)),
        filterByStars:(state)=>state.displayPackages = state.packages.filter((i,num)=>i.stars == num),
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


    const res = fetch('../../index.json').then(response => {
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


export const {clearState, filterForWord, filterByStars} = packageSlice.actions;
export default packageSlice.reducer;
