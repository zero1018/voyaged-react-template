import React from 'react';
import { useRoutes } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';

export default function Router() {
  return useRoutes([
    {
      element: <Home />,
      path: '/'
    },
    {
      element: <About />,
      path: '/about'
    },
  ]);
}
