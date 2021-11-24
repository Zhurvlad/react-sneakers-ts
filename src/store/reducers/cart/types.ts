import {ICart} from "../../../models/ICart";


export interface CartState {
    cart: ICart[];
    totalPrice: number,
    totalCount: number,
    totalTax: number

}

export enum CartActionEnum {
    ADD_SNEAKER_TO_CART = 'ADD_SNEAKER_TO_CART',
    DELETE_SNEAKER = 'DELETE_SNEAKER',
    CLEAR_CART = 'CLEAR_CART'
}

export interface SetClearCartAction {
    type: CartActionEnum.CLEAR_CART,
}

export interface SetAddSneakerToCartAction {
    type: CartActionEnum.ADD_SNEAKER_TO_CART,
    payload: ICart,
}

export interface SetDeleteSneakerAction {
    type: CartActionEnum.DELETE_SNEAKER,
    payload: number
}

export type CartAction =
    SetClearCartAction
    | SetAddSneakerToCartAction
    | SetDeleteSneakerAction