import {
    OrderActionEnum,
    SetAddSneakerToOrderAction,
} from "./types";
import {IOrder} from "../../../models/IOrder";


export const OrderActionCreators = {
    addSneakerToOrder: (order: IOrder):SetAddSneakerToOrderAction  => ({
        type: OrderActionEnum.ADD_SNEAKER_TO_ORDER, payload: order
    }),


}