export const increment = 'Increment'
export const decrement = 'Decrement'

export const inFunc = (id) => ({
    type : increment,
    payload : id
})

export const DeFunc = (id) => ({
    type : decrement,
    payload : id
})