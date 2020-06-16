import { ActionTypes } from './actions';

const DEFAULT_STATE = {
    username: "",
    password: "",
}

const AppReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case ActionTypes.SAVE_LOGIN:
            console.log("namkx", action.payload.userName);
            console.log("namkx", action.payload.password);
            return {
                ...state, 
                username: action.payload.userName,
                password: action.payload.password
            };
        default:
            return state;
    }
}

export default AppReducer;
