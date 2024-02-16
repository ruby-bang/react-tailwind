import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import DocsPage from './components/DocsPage.jsx'
import HomePage from './components/HomePage.jsx'
import ProfilePage from './components/ProfilePage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/docs',
    element: <DocsPage />
  },
  {
    path: '/profile',
    element: <ProfilePage />
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
