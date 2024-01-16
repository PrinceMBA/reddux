// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   users: [],
//   numner: 0,
//   count: 10,
// };

// const UsersSlice = createSlice({
//   name: "users",
//   initialState,
//   reducers: {
//     addUser: (state, action) => {
//       state.users = [...state.users, action.payload];
//     },

//     editUser: (state, action) => {
//       state.users = state.users.map((user) => {
//         if (user.id === action.id) return action.newData;
//         return user;
//       });
//     },
//   },
// });

// export const { addUser, editUser } = UsersSlice.actions;

// export default UsersSlice.reducer;
// src/features/users/UsersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    editUser: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = { ...state.users[index], ...action.payload };
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    // Additional reducers can be added here
  },
});

export const { addUser, editUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
