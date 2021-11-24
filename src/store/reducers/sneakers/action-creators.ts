import {ISneakers} from "../../../models/ISneakers";
import {SetErrorAction, SetIsLoadingAction, SetSneakersAction, SneakersActionEnum} from "./types";
import {AppDispatch} from "../../index";
import UseService from "../../../api/UseService";


export const SneakersActionCreators = {
    setSneakers: (sneakers: ISneakers[]): SetSneakersAction => ({
        type: SneakersActionEnum.SET_SNEAKERS,
        payload: sneakers}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({
        type: SneakersActionEnum.SET_IS_LOADING,
        payload}),
    setError : (payload: string): SetErrorAction => ({
        type: SneakersActionEnum.SET_ERROR,
        payload}),
    fetchSneakers: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(SneakersActionCreators.setIsLoading(false))
            setTimeout(async () => {
                const sneakers = await  UseService.getSneakers()
                dispatch(SneakersActionCreators.setSneakers(sneakers.data))
            }, 1000)
        } catch (e) {
            dispatch(SneakersActionCreators.setError('Произошла ошибка при загрузке!'))
        }
    }

}