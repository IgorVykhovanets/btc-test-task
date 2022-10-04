import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IBtc} from "../../interfaces/btc.interface";
import {btcService} from "../../services/btc.service";

export const getAllBtcInfoThunk = createAsyncThunk(
    'btcSlice/getAllBtcInfoThunk',
    async (_, {dispatch}) => {
        const {data} = await btcService.getAll();
        dispatch(getAllBtcInfo(data));
    }
);

interface IState {
    btc_info: IBtc[];
}

const initialState: IState = {
    btc_info: [],
}

export const btcSlice = createSlice({
    name: 'btcSlice',
    initialState,
    reducers: {
        getAllBtcInfo: (state, action: PayloadAction<IBtc>) => {
            state.btc_info.push(action.payload);
        }
    }
});

export const btcReducer = btcSlice.reducer;

export const {getAllBtcInfo} = btcSlice.actions;
