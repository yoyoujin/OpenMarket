import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import RootLayout from './pages/RootLayout/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />,
    element: <RootLayout />,
    children: [{ path: '/', element: <Home /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
