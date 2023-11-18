import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  SetEmailOrLoginPayload,
  StateCheckFieldSlice,
} from "../../interface/interface";

export const loginCheckInDB = createAsyncThunk(
  "user/loginCheckInDB",
  async (login: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/signup/checkfields?login=${login}`);
      const data = await response.json();

      if (response.status === 200) {
        switch (data.status) {
          case "ok":
            return true;

          default:
            return rejectWithValue("error");
        }
      }
    } catch (e) {
      console.log(e);
    }
  }
);

const initialState = {
  email: "",
  login: "",
  button: false,
} as StateCheckFieldSlice;

const fieldsCheckSlice = createSlice({
  name: "filedsCheck",
  initialState,
  reducers: {
    setEmailOrLogin: (
      state: StateCheckFieldSlice,
      action: PayloadAction<SetEmailOrLoginPayload>
    ) => {
      const { field, value } = action.payload;

      state[field] = value;
    },
  },
  //   extraReducers: (builder) => {
  //     builder.addCase(loginCheckInDB.fulfilled, (state: StateCheckFieldSlice, action: PayloadAction<SetEmailOrLoginPayload>) => {
  //       state.loginString = action.payload.login;
  //     });
  //   },
});

export const { setEmailOrLogin } = fieldsCheckSlice.actions;
export default fieldsCheckSlice.reducer;
