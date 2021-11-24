import {IOrder} from "../../../models/IOrder";


export interface OrderState {
    order: IOrder[];

}

export enum OrderActionEnum {
    ADD_SNEAKER_TO_ORDER = 'ADD_SNEAKER_TO_ORDER',

}


export interface SetAddSneakerToOrderAction {
    type: OrderActionEnum.ADD_SNEAKER_TO_ORDER,
    payload: IOrder,
}


export type OrderAction =
    SetAddSneakerToOrderAction
