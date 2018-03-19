import * as ActionType from "../actions/Login";
const defaultState = [];
const LOGIN = "LOGIN"

function loginDetails(state = defaultState, action) {
    switch (action.type) {
        case LOGIN:
            console.log('****state****')
            console.log(action.payload)
            /*if(action.payload.data.code==200){
                console.log(action.payload.data);

            }else if(action.payload.data.code==400){
                console.log('400 occure');
            }*/
            return [action.payload, ...state];
            break;
        default:
            return state;
    }
}

export {  loginDetails };

