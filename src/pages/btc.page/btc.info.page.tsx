import React, {FC, useEffect} from 'react';

import BtcInfo from "../../components/BtcInfo/BtcInfo";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {getAllBtcInfoThunk} from "../../store/slices/btc.slice";
import './btc.info.page.modules.scss'

const BtcInfoPage: FC = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllBtcInfoThunk());
    }, [])

    const {btc_info} = useAppSelector(state => state.btcReducer);

    return (
        <div className={'btc-page-info-block'}>
            {btc_info[0] && <BtcInfo btc_info={btc_info[0]}/>}
        </div>
    );
};

export default BtcInfoPage;