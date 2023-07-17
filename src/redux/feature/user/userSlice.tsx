/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authService from '../auth/authService.js'

interface ICredential {
    email: string;
    password: string;
  }
  interface IUserState {
    user: {
      email: string | null;
    };
    userToken : string | null,
    isLoading: boolean;
    isError: boolean;
    error: string | null;
  }
  // initialize userToken from local storage
  const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async ({ email, password }: ICredential) => {
        const data = await authService.login(email, password);
        console.log(data.data.email , "form  slice")
        localStorage.setItem("userToken",data.data.accessToken);
  
      return data.data;
    }
  );
export const createUser = createAsyncThunk(
    'user/createUser',
    async ({ email, password }: ICredential) => {
        const data = await authService.login(email, password);
        console.log(data.data.email , "form  slice")
        localStorage.setItem("userToken",data.data.accessToken);
  
      return data.data;
    }
  );





  const initialState: IUserState = {
    user: {
      email: null,
    },
    isLoading: false,
    isError: false,
    userToken ,
    error: null,
  };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
        state.user.email = payload.email;
      },
      logout: (state) => {
        localStorage.removeItem('userToken') // deletes token from storage
        state.isLoading = false
        state.userToken = null
        state.error = null
      },
  },
  extraReducers : (builder) => {
      builder
       .addCase(loginUser.pending, (state) => {
          state.isLoading = true;
          state.isError = false;
          state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, {payload}) => {
          state.userToken = payload.accessToken;
          state.user.email = payload.email;
          state.isLoading = false;
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.user.email = null;
          state.isLoading = false;
          state.isError = true;
          state.error = action.error.message!;
        });
  }
  
})
// export action
export const { setCredentials, logout } = userSlice.actions

export default userSlice.reducer