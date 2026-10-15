import api from "../../api/api.js";

export const fetchProducts = (queryString) => async (dispatch) => {
    try {
        dispatch({ type: "IS_FETCHING" });
        const { data } = await api.get(`/public/products?${queryString ? `${queryString}` : ''}`);
        dispatch({
            type: 'FETCH_PRODUCTS',
            payload: data.content,
            pageNumber: data.pageNumber,
            pageSize: data.pageSize,
            totalElements: data.totalElements,
            totalPages: data.totalPages,
            lastPage: data.lastPage,
        });
        dispatch({
            type: 'IS_SUCCESS',
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: 'IS_ERROR',
            payload: error?.response?.data?.message || "Falha ao carregar os produtos",
        })
    }
};

export const fetchCategories = () => async (dispatch) => {
    try {
        dispatch({ type: "CATEGORY_LOADER" });
        const { data } = await api.get(`/public/categories`);
        dispatch({
            type: 'FETCH_CATEGORIES',
            payload: data.content,
            pageNumber: data.pageNumber,
            pageSize: data.pageSize,
            totalElements: data.totalElements,
            totalPages: data.totalPages,
            lastPage: data.lastPage,
        });
        dispatch({
            type: 'IS_SUCCESS',
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: 'IS_ERROR',
            payload: error?.response?.data?.message || "Falha ao carregar as categorias",
        })
    }
};

export const addToCart = (data, qty = 1, toast) => (dispatch, getState) => {
    const {products} = getState().products;
    const getProduct = products.find(
        (item) => item.productId === data.productId,
    )
    const isQuantityExist = getProduct.quantity >= qty

    if (isQuantityExist) {
        dispatch({ type: "ADD_CART", payload: {...data, quantity: qty} });
        toast.success(`${data?.productName} has added to cart`);
        localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
    }
}

export const increaseCartQuantity = (data, toast, currentQuantity, setCurrentQuantity) => (dispatch, getState) => {
    const { products } = getState().products;
    const getProduct = products.find(
        (item) => item.productId === data.productId,
    )

    const isQuantityExist = getProduct.quantity >= currentQuantity + 1

    if (isQuantityExist) {
        const newQuantity = currentQuantity - 1;
        setCurrentQuantity(newQuantity);
        dispatch({ type: "ADD_CART", payload: {...data, quantity: newQuantity + 1} });
        localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
    } else {
        toast.error("Quantidade acima do estoque");
    }
}

export const decreaseCartQuantity = (data, newQuantity) => (dispatch, getState) => {
    dispatch({
        type: "ADD_CART",
        payload: {...data, quantity: newQuantity},
    })
    localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
}

export const removeFromCart = (data, toast) => (dispatch, getState) => {
    dispatch({
        type: "REMOVE_CART",
        payload: data
    })
    toast.success(`${data?.productName} has removed from cart`);
    localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
}

export const authenticateSignInUser = (sendData, toast, reset, navigate, setLoader) => async (dispatch) => {
    try {
        setLoader(true)
        const {data} = await api.post(`/auth/signin`, sendData)
        dispatch({ type: "LOGIN_USER", payload: data })
        localStorage.setItem("auth", JSON.stringify(data))
        reset()
        toast.success(`Login successfully!`);
        navigate("/");
    } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message || "Falha no login");
    } finally {
        setLoader(false)
    }
}

export const registerNewUser = (sendData, toast, reset, navigate, setLoader) => async (dispatch) => {
    try {
        setLoader(true)
        const {data} = await api.post(`/auth/signup`, sendData)
        dispatch({ type: "LOGIN_USER", payload: data })
        reset()
        toast.success(data?.message || `User Registered successfully!`);
        navigate("/login");
    } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message || error?.response?.data?.password || "Falha no cadastro");
    } finally {
        setLoader(false)
    }
}

export const logoutUser = (navigate) => async (dispatch) => {
    dispatch({ type: "LOGIN_OUT" })
    localStorage.removeItem("auth")
    navigate("/login");
}
