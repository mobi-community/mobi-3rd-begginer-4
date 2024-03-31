import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="w-full h-full flex justify-center items-center pt-8">
      <div className="w-[100rem] h-full flex flex-col items-center">
        <h1>Mobie Errors</h1>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
