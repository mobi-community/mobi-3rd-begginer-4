import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './'
import { ErrorList, Home } from '../pages'

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: '/error-list', element: <ErrorList /> },
    ],
  },
])

export default router
