import Button from './button'
import { useNavigate } from 'react-router-dom'
const FallbackComponent = ({ error, resetErrorBoundary }) => {
  const navi = useNavigate()

  return (
    <>
      Error 발생
      <Button
        onClick={() => {
          navi('/')
          resetErrorBoundary()
        }}>
        Try again
      </Button>
    </>
  )
}

export default FallbackComponent
