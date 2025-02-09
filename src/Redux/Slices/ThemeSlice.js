import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colorMode: localStorage.getItem("chakra-ui-color-mode") || "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleColorMode: (state) => {
      state.colorMode = state.colorMode === "light" ? "dark" : "light";
      localStorage.setItem("chakra-ui-color-mode", state.colorMode);
    },
  },
});

export const { toggleColorMode } = themeSlice.actions;
export default themeSlice.reducer;
