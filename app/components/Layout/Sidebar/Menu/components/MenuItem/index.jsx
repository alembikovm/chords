import React from 'react';
import {Link} from 'react-router-dom';
import MenuItemWrapper from './MenuItemWrapper';

function MenuItem({to, label}) {
    return (
        <Link to={to}>
            <MenuItemWrapper>
                {label}
            </MenuItemWrapper>
        </Link>
    );
}

export default MenuItem;
