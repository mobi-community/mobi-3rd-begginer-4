const ErrorComponent = () => {
  const err = new Error()
  err.message = '인증되지 않은 회원입니다'
  err.status = 401
  console.log(err.message)
  console.log(err.status)
  throw err
}
export default ErrorComponent
