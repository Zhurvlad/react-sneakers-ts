import produce from 'immer'
import {OrderAction, OrderActionEnum, OrderState} from "./types";
import {IOrder} from "../../../models/IOrder";



const initialState:OrderState = {
    order: [],
}

export default function orderReducer (state = initialState, actions:OrderAction):OrderState  {
    return  produce(state, draft => {
        switch (actions.type) {
            case OrderActionEnum.ADD_SNEAKER_TO_ORDER:
             draft.order.push(actions.payload)
            break
            default:
                return state
        }
    })
}