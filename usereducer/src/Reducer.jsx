import { increment, decrement } from "./Actions";

const reducer = (state,action) => {
    switch (action.type) {
        case increment : return {
            ...state,
            prices : state.prices.map(item => 
                item.id === action.payload
                ? {...item, value : item.value + item.price, quantity : item.quantity + 1}
                : item
            )
            // que : state.que.map(item =>
            //     item.id === action.payload
            //     ? {...item, quantity : item.quantity + 1}
            //     : item
            // )
        }
        case decrement : return {
            ...state,
            prices : state.prices.map(item => 
                item.id === action.payload && item.quantity > 1
                ? {...item, value : item.value - item.price, quantity : item.quantity - 1}
                : item
            )
            // que : state.que.map(item =>
            //     item.id === action.payload
            //     ? {...item, quantity : item.quantity - 1}
            //     : item
            // )
        }
    }
}
export default reducer