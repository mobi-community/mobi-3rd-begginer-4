import { Button, FallbackComponent } from '../component'
import { Suspense, useState } from 'react'
import ErrorStatus from './error-status'
import { ErrorBoundary } from 'react-error-boundary'
const ErrorList = () => {
  const ERRORTEXT = [401, 402, 403, 404]

  const onClickButton = () => {
    setStatus((prev) => !prev)
  }
  const [status, setStatus] = useState(false)
  return (
    <div className="grid grid-cols-4 gap-16 m-40">
      {ERRORTEXT.map((text, idx) => (
        <Button onClick={onClickButton} key={idx}>
          error status {text}
        </Button>
      ))}
      <ErrorBoundary fallbackRender={(props) => <FallbackComponent {...props} />}>
        <Suspense fallback={<h2>Loading</h2>}>
          {status && <ErrorStatus status={status} />}
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default ErrorList
