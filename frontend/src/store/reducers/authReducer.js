const initialState = {
    user: null,
    address: []
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {...state, user: action.payload }
        case "USER_ADDRESS":
            return {
                ...state,
                address: action.payload
            }
        case "SELECT_CHECKOUT_ADDRESS":
            return { ...state, selectedUserCheckoutAddress: action.payload }
        case "REMOVE_CHECKOUT_ADDRESS":
            return { ...state, selectedUserCheckoutAddress: null }
        case "LOG_OUT":
            return {...state, user: null, address: []}
        default:
            return state
    }
}
