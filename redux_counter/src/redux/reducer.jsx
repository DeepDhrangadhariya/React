import { increment,decrement } from "./actions";

const defaultValue = {
    count : 0
}

const counterReducer = (state = defaultValue, action) => {
    switch(action.type)
    {
        case increment : return {
            ...state,
            count : state.count + 1
        }
        
        case decrement : return {
            ...state,
            count : (state.count <= 0) ? state.count = 0 : state.count -1
        }
        default : return state
    }
}
export default counterReducer