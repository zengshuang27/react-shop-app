import * as actionTypes from "../constants/userinfo"

const initialState = {}

export default function userinfo( state = initialState , action ){
    switch(action.type){
        case actionTypes.LOGIN:
            return state = action.data;
        default:
            return state;
    }
}