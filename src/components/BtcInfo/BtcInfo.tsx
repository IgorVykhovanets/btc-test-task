import React, {FC} from 'react';

import {IBtc} from "../../interfaces/btc.interface";
import './btc.info.modules.scss'

const BtcInfo: FC<{ btc_info: IBtc; }> = ({btc_info: {time, chartName, bpi: {EUR, USD, GBP}}}) => {


    return (
        <div className={'btc-info-block'}>
            <div className={'btc-info-block-left'}>
                <h1>{chartName}</h1>
                <p>{time.updated}</p>
            </div>
            <div className={'btc-info-block-right'}>
                <ul>
                    <span>{USD.code}</span>
                    <li>{USD.rate}</li>
                    <span>{EUR.code}</span>
                    <li>{EUR.rate}</li>
                    <span>{GBP.code}</span>
                    <li>{GBP.rate}</li>
                </ul>
            </div>
        </div>
    );
};

export default BtcInfo;