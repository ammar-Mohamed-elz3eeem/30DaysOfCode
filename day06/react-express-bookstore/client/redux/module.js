import { handleActions } from "redux-actions"

const initalState = {
	products: [],
	product: {},
	cartItems: {}
}

const ADD_TO_CART = "products/ADD_TO_CART";
const REMOVE_FROM_CART = "products/REMOVE_FROM_CART";
const FETCH_PRODUCTS = "products/FETCH_PRODUCTS";
const FETCH_PRODUCT = "products/FETCH_PRODUCT";

const methods = {
	addToCartActionCreator: (pid) => ({
		type: ADD_TO_CART,
		payload: {
			id: pid,
			number: 1
		}
	}),
	removeFromCartActionCreator: (pid) => ({
		type: REMOVE_FROM_CART,
		payload: {
			id: pid
		}
	}),
	fetchProductsActionCreator: ({data}) => ({
		type: FETCH_PRODUCTS,
		payload: {
			products: data.filter(book => book.book_title),
		}
	}),
	fetchProductActionCreator: (index) => ({
		type: FETCH_PRODUCT,
		payload: {
			isbn: index,
		}
	}),
	reducer: handleActions({
		[FETCH_PRODUCTS]: (state, action) => ({
			...state,
			all: action.payload.products
		}),
		[ADD_TO_CART]: (state, action) => {
			const number = ( state.cart && state.cart[action.payload.id] )
			? state.cart[action.payload.id] + 1
			: 1;
			console.log("Current items on cart from ", action.payload.id, " is ", number);
			return {
				...state,
				cart: {
					...state.cart,
					[action.payload.id]: number
				}
			}
		},
		[FETCH_PRODUCT]: (state, action) => {
			return ({
				...state,
				current: state.all && state.all.find(b => b.book_isbn == action.payload.isbn)
			})
		},
		[REMOVE_FROM_CART]: (state, action) => {
			console.log("Payload Id: ", action);
			console.log(Object.keys(state.cart).reduce((obj, key) => {
				if (key !== action.payload.id) {
					obj[key] = state.cart[key]
				}
				console.log(obj);
				return obj;
			}, {}));
			return ({
				...state,
				cart: {...Object.keys(state.cart).reduce((obj, key) => {
					if (key !== action.payload.id) {
						obj[key] = state.cart[key]
					}
					return obj;
				}, {})}
			})
		},
	}, initalState)
}

export default methods;