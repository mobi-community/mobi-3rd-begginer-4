import { Button } from '../component'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navi = useNavigate()
  return (
    <div className="flex flex-col justify-center items-center m-32">
      <h2 className="pb-36">Get more infomation about Errors</h2>
      <Button onClick={() => navi('/error-list')}>Check out the errors</Button>
    </div>
  )
}
export default Home
