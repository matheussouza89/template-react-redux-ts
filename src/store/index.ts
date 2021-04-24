import {createStore, Store} from "redux";
import { STATE } from "./ducks/example/types"

import rootReducer from "./ducks/rootReducer";

export interface ApplicationState {
    example: STATE
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
