import PropTypes from 'prop-types';
import React from 'react';

// project import
import MainCard from './../../../ui-component/cards/MainCard';

//-----------------------|| AUTHENTICATION CARD WRAPPER ||-----------------------//

const AuthCardWrapper = ({ children, ...other }) => {
    return (
        <MainCard
            sx={{
                maxWidth: '475px',
                '& > *': {
                    flexGrow: 1,
                    flexBasis: '50%'
                },
                '@media (max-width: 600px)': {
                    margin: '20px'
                },
                '@media (max-width: 1280px)': {
                    maxWidth: '400px'
                }
            }}
            contentSX={{
                padding: '40px !important',
                '@media (max-width: 1280px)': {
                    padding: '24px !important'
                }
            }}
            {...other}
        >
            {children}
        </MainCard>
    );
};

AuthCardWrapper.propTypes = {
    children: PropTypes.node
};

export default AuthCardWrapper;
