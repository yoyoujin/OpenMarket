import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import RootLayout from './pages/RootLayout/RootLayout';
import SignUp from './pages/SignUp/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />,
    element: <RootLayout />,
    children: [{ path: '/', element: <Home /> }],
  },
  {
    path: '/login',
    errorElement: <NotFound />,
    element: <Login />,
  },
  {
    path: '/signup',
    errorElement: <NotFound />,
    element: <SignUp />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
