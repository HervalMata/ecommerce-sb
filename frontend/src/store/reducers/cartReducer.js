const initialState = {
    cart: [],
    totalPrice: 0,
    cartId: null,
}

export const cartReducer = (state = initialState, action) => {
    if (action.type === "ADD_CART") {
        const productToAdd = action.payload;
        const existingProduct = state.cart.find(
            (item) => item.productId === productToAdd.productId
        )

        if (existingProduct) {
            const updateCart = state.cart.map((item) => {
                if (item.productId === productToAdd.productId) {
                    return productToAdd
                } else {
                    return item
                }
            })

            return {
                ...state,
                cart: updateCart,
            }
        } else {
            const newCart = [...state.cart, productToAdd]
            return {
                ...state,
                cart: newCart
            }
        }
    } else if (action.type === "REMOVE_CART") {
        return {
            ...state,
            cart: state.cart.filter(
                (item) => item.productId !== action.payload.productId
            ),
        }
    } else {
        return state
    }
}