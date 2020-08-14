import thunk from "redux-thunk"
import rootReducer from "./reducers"

import {applyMiddleware, createStore} from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

const initialState = {}
const middleware = [thunk]

const store = createStore (
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
)

console.log(store.getState())

export default store