import {createStore, applyMiddleware} from "redux";
import {rootReducer} from "../reducers/index"
import {checkGenerateOptions} from "../middleWare"

const store = createStore(rootReducer, applyMiddleware(checkGenerateOptions));

export default store;