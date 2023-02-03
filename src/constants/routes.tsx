import { PathNavigation } from '../enums/Navigation';
import Home from '../pages/home/Home';
import SingIn from '../pages/singIn/SingIn';
import SingUp from '../pages/singUp/SingUp';
import PageNotFound from '../pages/error404/PageNotFound';
import React from 'react';
import Layout from '../pages/layout/Layout';

export const ROUTES = [
  { id: 1, path: PathNavigation.HOME, element: <Home /> },
  { id: 2, path: PathNavigation.SING_IN, element: <SingIn /> },
  { id: 3, path: PathNavigation.SING_UP, element: <SingUp /> },
  { id: 4, path: PathNavigation.LAYOUT, element: <Layout /> },
  { id: 5, path: PathNavigation.ERROR, element: <PageNotFound /> },
];
