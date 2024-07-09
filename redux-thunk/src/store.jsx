
import { applyMiddleware, createStore } from "redux"
import { thunk } from "redux-thunk"


const Increment = "Increment"
const Decrement = "Decrement"

export const inFunc = () => ({type : "Increment"})
export const deFunc = () => ({type : "Decrement"})

const initialState = {
    count : 0
}

const reducer=(state = initialState, action) => {
    switch (action.type) {
        case "Increment" : return {count : state.count + 1}
        case "Decrement" : return {count : state.count - 1}
        default : return state
    }
}

export const store = createStore(reducer, applyMiddleware(thunk))