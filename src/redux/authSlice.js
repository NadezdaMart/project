import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import { setExpense } from "./my-expencesSlice"

import {
  signInWithGoogle,
  logout,
  register,
  signIn,
  getUserDoc,
} from "../firebase"

const INITIAL_STATE = {
  user: null,
}

export const signInUser = createAsyncThunk(
  "auth/signin",
  async ({ email: userEmail, password }, thunkApi) => {
    try {
      const {
        user: { uid, email, displayName },
      } = await signIn(userEmail, password)

      return { uid, email, displayName }
    } catch (err) {
      console.log(err)
    }
  }
)
export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ email: userEmail, password }, thunkApi) => {
    const {
      payload: {
        user: { uid, email, displayName },
      },
    } = await register(userEmail, password)

    await getUserDoc({ uid, email })

    return { uid, email, displayName }
  }
)

export const loginWithGoogle = createAsyncThunk(
  "auth/loginWithGoogle",
  async (_, thunkApi) => {
    const {
      user: { uid, email, displayName },
    } = await signInWithGoogle()

    await getUserDoc({ uid, email })

    const user = { uid, email, displayName }

    thunkApi.dispatch(setUser(user))
  }
)
export const logoutFromApp = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      await logout()
      thunkApi.dispatch(setExpense(null))
    } catch (err) {
      console.log(err)
    }
    return null
  }
)
const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    setUser(state, action) {
      state.user = action.payload
    },
  },
  extraReducers: {
    [signInUser.fulfilled]: (state, userData) => {
      state.user = userData.payload
    },

    [registerUser.fulfilled]: (state, userData) => {
      state.user = userData.payload
    },

    [logoutFromApp.rejected]: (state) => {
      state.user = null
    },
    [logoutFromApp.fulfilled]: (state) => {
      state.user = null
    },
  },
})

export const { setUser } = authSlice.actions
export default authSlice.reducer
