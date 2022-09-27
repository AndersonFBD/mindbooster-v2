import { createSlice } from "@reduxjs/toolkit";
import { State } from "react-native-gesture-handler";

const idUsuarioSlice = createSlice({
    name: 'userID',
    initialState:{
        userID: '',
        mail: '',
        isLogged: false
    },
    reducers: {
        LoginUsuario(state, {payload}) {
            return{... state, isLogged: true, userID: payload, mail: payload}
        },
        logout(state){
            return{... state, isLogged: false, userID:'', mail: ''}
        }
    }
})
  
export const {LoginUsuario, logout} = idUsuarioSlice.actions

export const selectUser = state => state.userID

export default idUsuarioSlice.reducer