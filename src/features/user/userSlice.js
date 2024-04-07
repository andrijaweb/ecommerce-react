import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  password: "",
  phone: "",
  address: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
    updateEmail(state, action) {
      state.email = action.payload;
    },
    updatePassword(state, action) {
      state.password = action.payload;
    },
    updatePhone(state, action) {
      state.phone = action.payload;
    },
    updateAddress(state, action) {
      state.address = action.payload;
    },
  },
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
