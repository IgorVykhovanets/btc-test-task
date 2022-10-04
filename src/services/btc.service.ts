import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";
import {IBtc} from "../interfaces/btc.interface";

export const btcService = {
    getAll: () => axiosService.get<IBtc>(urls.btcCurrentPrice),
};