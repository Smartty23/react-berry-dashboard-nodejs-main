import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

// project imports
import GuestGuard from './../utils/route-guard/GuestGuard';
import MinimalLayout from './../layout/MinimalLayout';
import NavMotion from './../layout/NavMotion';
import Loadable from '../ui-component/Loadable';

// login routing
const AuthLogin = Loadable(lazy(() => import('../views/pages/authentication/login')));
const AuthRegister = Loadable(lazy(() => import('../views/pages/authentication/register')));

//-----------------------|| AUTH ROUTING ||-----------------------//

const LoginRoutes = (
    <Route element={<GuestGuard><NavMotion><MinimalLayout /></NavMotion></GuestGuard>}>
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/register" element={<AuthRegister />} />
    </Route>
);

export default LoginRoutes;
