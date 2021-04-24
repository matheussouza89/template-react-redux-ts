import store from "../..";
import { TYPES } from "./types";

export const example = (value: boolean) => store.dispatch({
    type: TYPES.EXAMPLE, 
    value
});