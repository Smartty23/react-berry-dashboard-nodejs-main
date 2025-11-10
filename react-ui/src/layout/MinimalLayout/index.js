import PropTypes from 'prop-types';
import React from 'react';
import { Outlet } from 'react-router-dom';

// project imports
import Customization from './../Customization';

//-----------------------|| MINIMAL LAYOUT ||-----------------------//

const MinimalLayout = (props) => {
    return (
        <React.Fragment>
            {props.children || <Outlet />}
            <Customization />
        </React.Fragment>
    );
};

MinimalLayout.propTypes = {
    children: PropTypes.node
};

export default MinimalLayout;
