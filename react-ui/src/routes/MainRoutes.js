import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

// project imports
import MainLayout from './../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
import AuthGuard from './../utils/route-guard/AuthGuard';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('../views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('../views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('../views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('../views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('../views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('../views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('../views/sample-page')));

//-----------------------|| MAIN ROUTING ||-----------------------//

const MainRoutes = (
    <Route element={<AuthGuard><MainLayout /></AuthGuard>}>
        <Route path="/dashboard/default" element={<DashboardDefault />} />
        <Route path="/utils/util-typography" element={<UtilsTypography />} />
        <Route path="/utils/util-color" element={<UtilsColor />} />
        <Route path="/utils/util-shadow" element={<UtilsShadow />} />
        <Route path="/icons/tabler-icons" element={<UtilsTablerIcons />} />
        <Route path="/icons/material-icons" element={<UtilsMaterialIcons />} />
        <Route path="/sample-page" element={<SamplePage />} />
    </Route>
);

export default MainRoutes;
