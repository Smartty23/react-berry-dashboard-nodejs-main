import React, { lazy } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';

// project imports
import MainLayout from './../layout/MainLayout';
import MinimalLayout from './../layout/MinimalLayout';
import Loadable from '../ui-component/Loadable';
import AuthGuard from './../utils/route-guard/AuthGuard';
import GuestGuard from './../utils/route-guard/GuestGuard';
import NavMotion from './../layout/NavMotion';
import config from './../config';

// Dashboard
const DashboardDefault = Loadable(lazy(() => import('../views/dashboard/Default')));

// Utilities
const UtilsTypography = Loadable(lazy(() => import('../views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('../views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('../views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('../views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('../views/utilities/TablerIcons')));

// Sample Page
const SamplePage = Loadable(lazy(() => import('../views/sample-page')));

// Authentication
const AuthLogin = Loadable(lazy(() => import('../views/pages/authentication/login')));
const AuthRegister = Loadable(lazy(() => import('../views/pages/authentication/register')));
const AuthLogin3 = Loadable(lazy(() => import('../views/pages/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('../views/pages/authentication/authentication3/Register3')));

//-----------------------|| ROUTING RENDER ||-----------------------//

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={config.defaultPath} replace />} />
            
            {/* Main Routes with Auth Guard */}
            <Route path="/" element={<AuthGuard><MainLayout /></AuthGuard>}>
                <Route path="dashboard/default" element={<DashboardDefault />} />
                <Route path="utils/util-typography" element={<UtilsTypography />} />
                <Route path="utils/util-color" element={<UtilsColor />} />
                <Route path="utils/util-shadow" element={<UtilsShadow />} />
                <Route path="icons/tabler-icons" element={<UtilsTablerIcons />} />
                <Route path="icons/material-icons" element={<UtilsMaterialIcons />} />
                <Route path="sample-page" element={<SamplePage />} />
            </Route>

            {/* Login Routes with Guest Guard */}
            <Route path="/" element={<GuestGuard><NavMotion><MinimalLayout /></NavMotion></GuestGuard>}>
                <Route path="login" element={<AuthLogin />} />
                <Route path="register" element={<AuthRegister />} />
            </Route>

            {/* Authentication Routes */}
            <Route path="/pages" element={<MinimalLayout />}>
                <Route path="login/login3" element={<AuthLogin3 />} />
                <Route path="register/register3" element={<AuthRegister3 />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
