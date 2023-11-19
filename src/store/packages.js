import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  packages: [],
  err: "",
  displayPackages: [],
};

export const packageSlice = createSlice({
  name: "packages",
  initialState,
  reducers: {
    clearState: (state) => (state.packages = []),
    // filterForWord(state,{payload}){
    //     console.log(payload)
    //     const val = (word) => displayedItemsOne.filter((i)=>i.name.includes(word))
    //     state.displayPackages = state.packages.filter((i)=>i.name.includes(word))
    // },
    filterByStars: (state) =>
      (state.displayPackages = state.packages.filter(
        (i, num) => i.stars == num
      )),
    // add searches
    //add filters
    //-- score
    //-- above score
    //-- below score
    //-- find word in package
    //-- search by stars
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPackages.fulfilled, (state, action) => {
        state.packages = action.payload;
      })
      .addCase(getAllPackages.rejected, (state, action) => {
        state.packages = [];
        state.err = action.payload;
      })
      .addCase(filterForWord.fulfilled, (state, action) => {
        state.displayPackages = action.payload;
      })
      .addCase(filterForWord.rejected, (state, action) => {
        state.displayPackages = [];
        state.err = action.payload;
      });
  },
});

export const getAllPackages = createAsyncThunk(
  "packages/getAllPackages",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("../../index.json");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const filterForWord = createAsyncThunk(
  "filter/filterPackages",
  async (word, { rejectWithValue }) => {
    const res = fetch("../../index.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      });

    if (!res.ok) {
      rejectWithValue(await res);
    }
    const data = await res;

    return data.filter((i) => i.name.includes(word));
  }
);

export const { clearState, filterByStars } = packageSlice.actions;
export default packageSlice.reducer;
