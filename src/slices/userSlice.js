import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: '',
    isLoggedIn: false,
    authToken: '',
    refreshToken: '',
    profilePhotoeUrl: '',
    name: '',
  },
  reducers: {
    logIn: (state, action) => {
      state.email = action.payload.user.email;
      state.isLoggedIn = true;
      state.authToken = action.payload.user.access_token;
      state.refreshToken = action.payload.user.access_token;
      state.name = action.payload.user.fullName;
      state.username = action.payload.user.userName;
      state.profilePhotoeUrl = action.payload.user.image;
      state.id = action.payload.user.id;
      localStorage.setItem("accessToken", action.payload.user.access_token);
      localStorage.setItem("refreshToken", action.payload.user.access_token);
      localStorage.setItem("userId", action.payload.user.id);
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logOut: (state) => {
      state.email = '';
      state.isLoggedIn = false;
      state.authToken = '';
      state.refreshToken = '';
      state.name ='';
      state.profilePhotoeUrl = '';
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('userId');
      localStorage.removeItem('user');
    }
  }
});

export const { logIn, logOut } = userSlice.actions;

export const selectUser = (state) => state.user;
export const selectState = (state) => state.user.isLoggedIn;
export const selectImage = (state) => state.user.profilePhotoeUrl;

export default userSlice.reducer;


// Use if need be
// function saveToLocalStorage(state) {
//   try {
//     const serialisedState = JSON.stringify(state);
//     localStorage.setItem("persistantUser", serialisedState);
//   } catch (e) {
//     console.warn(e);
//   }
// }

// function deleteFromLocalStorage() {
//   try {
//     localStorage.removeItem("persistantUser");
//   } catch (e) {
//     console.warn(e);
//   }
// }