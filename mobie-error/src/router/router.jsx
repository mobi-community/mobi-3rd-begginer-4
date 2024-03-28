import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './'
import { Home } from '../pages'

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [{ path: '', element: <Home /> }],
  },
])

export default router
