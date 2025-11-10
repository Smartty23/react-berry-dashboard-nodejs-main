import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

// project imports
import config from './../config';

//-----------------------|| ROUTING RENDER ||-----------------------//

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={config.defaultPath} replace />} />
            {/* Routes for authentication pages */}
            {AuthenticationRoutes}
            {/* Route for login */}
            {LoginRoutes}
            {/* Routes for main layouts */}
            {MainRoutes}
        </Routes>
    );
};

export default AppRoutes;
