import {ICart} from "../../../models/ICart";
import {IFavorite} from "../../../models/IFavorite";


export interface FavoriteState {
    favorite: IFavorite[];

}

export enum FavoriteActionEnum {
    ADD_SNEAKER_TO_FAVORITE = 'ADD_SNEAKER_TO_FAVORITE',
    REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE',
}


export interface SetAddSneakerToFavoriteAction {
    type: FavoriteActionEnum.ADD_SNEAKER_TO_FAVORITE,
    payload: IFavorite,
}

export interface SetDeleteSneakerFromFavoriteAction {
    type: FavoriteActionEnum.REMOVE_FROM_FAVORITE,
    payload: number
}

export type FavoriteAction =
    SetAddSneakerToFavoriteAction
    | SetDeleteSneakerFromFavoriteAction