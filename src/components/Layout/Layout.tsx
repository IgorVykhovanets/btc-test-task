import React, {FC} from 'react';
import {Link} from "react-router-dom";

import './layout.modules.scss'

const Layout:FC = () => {
    return (
        <div className={'btc-link-block'}>
            <Link to={'btc_info'} className={'link-block'}>BTC Info</Link>
        </div>
    );
};

export default Layout;