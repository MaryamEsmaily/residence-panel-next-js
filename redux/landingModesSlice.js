import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowMap: false,
};

export const landingModesSlice = createSlice({
  name: "landingModes",
  initialState,
  reducers: {
    setIsShowMap: (state, action) => {
      state.isShowMap = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsShowMap } = landingModesSlice.actions;

export default landingModesSlice.reducer;
