import { createSlice } from "@reduxjs/toolkit";

const isDetailsSlice = createSlice({
  name: "isDetails",
  initialState: false,
  reducers: {
    toggleIsDetails: (state) => (!state),
  },
});

export const { toggleIsDetails } = isDetailsSlice.actions;
export default isDetailsSlice.reducer;
