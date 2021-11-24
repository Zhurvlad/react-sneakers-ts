import {FavoriteActionEnum, SetAddSneakerToFavoriteAction} from "./types";
import {IFavorite} from "../../../models/IFavorite";
import {SetDeleteSneakerFromFavoriteAction} from "./types";


export const FavoriteActionCreators = {
    addSneakerToFavorite: (favorite: IFavorite):SetAddSneakerToFavoriteAction  => ({
        type: FavoriteActionEnum.ADD_SNEAKER_TO_FAVORITE, payload: favorite
    }),
    removeSneakersFromFavorite: (id: number): SetDeleteSneakerFromFavoriteAction => ({
        type: FavoriteActionEnum.REMOVE_FROM_FAVORITE, payload: id
    })

}