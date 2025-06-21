import { createSlice } from "@reduxjs/toolkit";

export const serviceSlice = createSlice({
  name: "service",
  initialState: {
    openAddPostModal: false,
    openEditProfileModal: false,
    anchorE1: null,
    anchorE2: null,
    myInfo: null,
    darkMode: false,
  },
  reducers: {
    addPostModal: (state, action) => {
      state.openAddPostModal = action.payload;
    },
    editProfileModal: (state, action) => {
      state.openEditProfileModal = action.payload;
    },
    toggleMainMenu: (state, action) => {
      state.anchorE1 = action.payload;
    },
    toggleMyMenu: (state, action) => {
      state.anchorE2 = action.payload;
    },
    toggleColorMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setMyInfo: (state, action) => {
      state.myInfo = action.payload;
    },
  },
});

export const {
  addPostModal,
  editProfileModal,
  toggleMainMenu,
  toggleMyMenu,
  toggleColorMode,
  setMyInfo,
} = serviceSlice.actions;

export default serviceSlice.reducer;
