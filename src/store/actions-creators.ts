import {SneakersActionCreators} from "./reducers/sneakers/action-creators";
import {CartActionCreators} from './reducers/cart/action-creators'
import {FavoriteActionCreators} from "./reducers/favorite/action-creators";
import {OrderActionCreators} from "./reducers/orders/action-creators";


export const allActionCreators = {
    ...SneakersActionCreators,
    ...CartActionCreators,
    ...FavoriteActionCreators,
    ...OrderActionCreators
}