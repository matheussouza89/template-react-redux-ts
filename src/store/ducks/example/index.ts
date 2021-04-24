import { Reducer } from "redux";
import {STATE, TYPES} from "./types";

const INITIAL_STATE: STATE = {
    data: [],
    error: false,
    loading: false,
}

const reducer: Reducer<STATE> = (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case TYPES.EXAMPLE :
            return {...state, loading: action.value }
        default:
            return state
    }
}

export default reducer;