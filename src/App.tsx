import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";

import HomePage from "./pages/home.page/home.page";
import BtcInfoPage from "./pages/btc.page/btc.info.page";
import './app.modules.scss'

const App:FC = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/btc_info'} element={<BtcInfoPage/>}/>
            </Routes>
        </div>
    );
};

export default App;