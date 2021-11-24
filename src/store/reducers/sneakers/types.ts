import {ISneakers} from "../../../models/ISneakers";


export interface SneakersState {
    sneakers: ISneakers[];
    isLoading: boolean,
    error: string
}

export enum SneakersActionEnum {
    SET_SNEAKERS = 'SET_SNEAKERS',
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_ERROR = 'SET_ERROR'
}

export interface SetIsLoadingAction {
    type: SneakersActionEnum.SET_IS_LOADING,
    payload: boolean
}

export interface SetSneakersAction {
    type: SneakersActionEnum.SET_SNEAKERS,
    payload: ISneakers[],
}

export interface SetErrorAction {
    type: SneakersActionEnum.SET_ERROR,
    payload: string
}

export type SneakersAction =
    SetIsLoadingAction
    | SetSneakersAction
    | SetErrorAction