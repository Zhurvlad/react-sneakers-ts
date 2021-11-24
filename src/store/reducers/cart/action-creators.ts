import {CartActionEnum, SetAddSneakerToCartAction, SetClearCartAction, SetDeleteSneakerAction} from "./types";
import {ICart} from "../../../models/ICart";


export const CartActionCreators = {
    addSneakerToCart: (sneakers: ICart): SetAddSneakerToCartAction => ({
        type: CartActionEnum.ADD_SNEAKER_TO_CART, payload: sneakers
    }),
    removeSneakers: (id: number): SetDeleteSneakerAction => ({
        type: CartActionEnum.DELETE_SNEAKER, payload: id
    }),
    clearCart: (): SetClearCartAction => ({
        type: CartActionEnum.CLEAR_CART
    })

}