import produce from 'immer'

import {ISneakers} from "../../../models/ISneakers";
import {SneakersAction, SneakersActionEnum, SneakersState} from "./types";



const initialState:SneakersState = {
    sneakers: {} as ISneakers[],
    isLoading: false,
    error: ''
}


export default function sneakersReducer (state = initialState, actions:SneakersAction): SneakersState {
        return  produce(state, draft => {
            switch (actions.type) {
                case SneakersActionEnum.SET_IS_LOADING:
                    draft.isLoading = actions.payload
                    break;

                case SneakersActionEnum.SET_SNEAKERS:
                    draft.sneakers = actions.payload
                    draft.isLoading = true
                    break;
                case SneakersActionEnum.SET_ERROR:
                    draft.error = actions.payload
                    draft.isLoading = false
                    break;

                default:
                    return state
            }
        })
}