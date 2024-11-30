import React from 'react';
import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom';
import { SentryRoutes } from '../manager/sentryManager';


import SetupAccount from 'src/pages/account/SetupAccount';
import Login from 'src/pages/account/Login';
import ForgetPassword from 'src/pages/account/ForgetPassword';
import ResetPassword from 'src/pages/account/ResetPassword';
import DealerTools from 'src/pages/dealerTools/Dealertools';
import Admin from 'src/dashboard/Admin';

import Home from 'src/pages/home/Home';
import Test from 'src/pages/test/Test';
import NotFound from 'src/pages/notFound/NotFound';

import { RoutePath } from 'src/constants/routeConst';
import { useInitiator } from 'src/hooks/useInitiator';
import AuthGuard from './AuthGuard';



export default function Router() {

  useInitiator();


  return (
    <SentryRoutes>

      <Route path={RoutePath.HOME} Component={Home} />

      <Route path={RoutePath.SETUP_ACCOUNT} Component={SetupAccount} />
      <Route path={RoutePath.LOGIN} Component={Login} />
      <Route path={RoutePath.FORGET_PASSWORD} Component={ForgetPassword} />
      <Route path={RoutePath.RESET_PASSWORD} Component={ResetPassword} />


      <Route Component={AuthGuard}>
        <Route path="/subscribe/*" Component={DealerTools} />
        <Route path="/admin/*" Component={Admin} />
      </Route>


      <Route path={RoutePath.TEST} Component={Test} />
      <Route path="*" Component={NotFound} />

    </SentryRoutes>
  );

}