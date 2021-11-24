import axios, {AxiosResponse} from "axios";
import {ISneakers} from "../models/ISneakers";



export default class UseService {
    static async getSneakers(): Promise<AxiosResponse<ISneakers[]>>{
        return axios.get<ISneakers[]>('http://localhost:3001/sneakers')
    }
}