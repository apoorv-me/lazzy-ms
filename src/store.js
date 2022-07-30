import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

// Use this if need be
// function loadFromBrowser() {
//   try {
//     const serialisedState = localStorage.getItem("persistantUser");
//     if (serialisedState === null) return undefined;
//     const user = JSON.parse(serialisedState);
//     const data = {
//       user: { data: user, token: user.token, isLoggedIn: true },
//     };
//     axios.defaults.headers.common["Authorization"] = user.token;
//     return data;
//   } catch (e) {
//     console.warn(e);
//     return undefined;
//   }
// }

export default configureStore({
  reducer: {
    user: userReducer
  },
  // preloadedState: loadFromBrowser(),
});