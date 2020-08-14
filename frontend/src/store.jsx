import thunk from "redux-thunk"
import rootReducer from "./reducers"

import {applyMiddleware, createStore} from "redux"
import { composeWithDevTools } from "redux-thunk"

const initialState = {}
const middleware = applyMiddleware[thunk]

const store = createStore (
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store