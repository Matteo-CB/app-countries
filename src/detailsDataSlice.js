import { createSlice } from "@reduxjs/toolkit";

const detailsDataSlice = createSlice({
  name: "detailsData",
  initialState: [],
  reducers: {
    toggleDetailsData: (state, action) => action.payload,
  },
});

export const { toggleDetailsData } = detailsDataSlice.actions;
export default detailsDataSlice.reducer;
