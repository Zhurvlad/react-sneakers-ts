import produce from 'immer'

import {CartAction, CartActionEnum, CartState} from "./types";

const initialState:CartState = {
    cart: [],
    totalCount: 0,
    totalPrice: 0,
    totalTax: 0
}

export default function cartReducer (state = initialState, actions:CartAction): CartState {
    return  produce(state, draft => {
        switch (actions.type) {

            case CartActionEnum.ADD_SNEAKER_TO_CART:

                draft.cart.push(actions.payload)

                draft.totalPrice = draft.cart.reduce((sum, cartObj) => cartObj.price + sum, 0)
                break;

            case CartActionEnum.CLEAR_CART:
                draft.cart = []
                draft.totalPrice = 0

                break;
            case CartActionEnum.DELETE_SNEAKER:
                draft.cart = draft.cart.filter(item => item.id !== actions.payload)
                draft.totalPrice = draft.cart.reduce((sum, cartObj) => cartObj.price + sum, 0)

                break;

            default:
                return state
        }
    })
}