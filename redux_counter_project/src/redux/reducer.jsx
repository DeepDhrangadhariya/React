import { Increment,Decrement } from "./actions";

const value = {
    count : 0
}

const counter = (state= value,action) => {
    switch(action.type) {
        case Increment : return{
            ...state,
            count : state.count + 1
        }
        case Decrement : return{
            ...state,
            count : (state.count <= 0) ? state.count = 0 : state.count - 1
        }
        default : return state
    }
}
export default counter