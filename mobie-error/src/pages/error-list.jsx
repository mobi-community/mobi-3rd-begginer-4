import { Button } from '../component'

const ErrorList = () => {
  const ERRORTEXT = [100, 200, 300, 400]

  return (
    <div className="grid grid-cols-4 gap-16 m-40">
      {ERRORTEXT.map((text, idx) => (
        <Button key={idx}>error status {text}</Button>
      ))}
    </div>
  )
}

export default ErrorList
