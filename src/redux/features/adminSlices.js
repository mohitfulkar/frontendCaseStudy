import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profiles: JSON.parse(localStorage.getItem("profiles")) || [],
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    loadProfiles: (state) => {
      const storedProfiles = JSON.parse(localStorage.getItem("profiles"));
      if (storedProfiles) {
        state.profiles = storedProfiles;
      }
    },

    addProfile: (state, action) => {
      const newProfile = action.payload;
      state.profiles.push(newProfile);
      localStorage.setItem("profiles", JSON.stringify(state.profiles));
    },

    updateProfile: (state, action) => {
      const { id, updatedData } = action.payload;
      const profileIndex = state.profiles.findIndex(
        (profile) => profile.id === id
      );
      if (profileIndex !== -1) {
        const updatedProfile = {
          ...state.profiles[profileIndex],
          ...updatedData,
        };
        state.profiles[profileIndex] = updatedProfile;
        localStorage.setItem("profiles", JSON.stringify(state.profiles));
      }
    },

    deleteProfile: (state, action) => {
      const updatedProfiles = state.profiles.filter(
        (profile) => profile.id !== action.payload
      );
      state.profiles = updatedProfiles;
      localStorage.setItem("profiles", JSON.stringify(state.profiles));
    },
  },
});

export const { loadProfiles, addProfile, updateProfile, deleteProfile } =
  adminSlice.actions;
export default adminSlice.reducer;
