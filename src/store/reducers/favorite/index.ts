import produce from 'immer'
import {FavoriteAction, FavoriteActionEnum, FavoriteState} from "./types";



const initialState:FavoriteState = {
    favorite: [],
}

export default function favoriteReducer (state = initialState, actions:FavoriteAction): FavoriteState {
    return  produce(state, draft => {
        switch (actions.type) {
            case FavoriteActionEnum.ADD_SNEAKER_TO_FAVORITE:
                draft.favorite.push(actions.payload)
                break;
            case FavoriteActionEnum.REMOVE_FROM_FAVORITE:
                draft.favorite = draft.favorite.filter(item => item.id !== actions.payload)
                break;
            default:
                return state
        }
    })
}