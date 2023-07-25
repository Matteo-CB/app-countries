import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    toggleSearch: (state, payload) => payload.payload,
  },
});

export const { toggleSearch } = searchSlice.actions;
export default searchSlice.reducer;
