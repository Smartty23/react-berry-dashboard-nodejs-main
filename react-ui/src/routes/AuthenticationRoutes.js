import React, { lazy } from 'react';
import { Route } from 'react-router-dom';
import Loadable from '../ui-component/Loadable';

// project imports
import MinimalLayout from './../layout/MinimalLayout';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('../views/pages/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('../views/pages/authentication/authentication3/Register3')));

//-----------------------|| AUTHENTICATION ROUTING ||-----------------------//

const AuthenticationRoutes = (
    <Route element={<MinimalLayout />}>
        <Route path="/pages/login/login3" element={<AuthLogin3 />} />
        <Route path="/pages/register/register3" element={<AuthRegister3 />} />
    </Route>
);

export default AuthenticationRoutes;
