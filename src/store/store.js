import { applyMiddleware, createStore, } from "redux"
import reducers from "./reducers"
import initState from "./initState"

const store = createStore(reducers, initState)

export default store
