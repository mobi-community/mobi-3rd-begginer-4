const errorMessages = {
  400: "잘못된 요청입니다.",
  401: "인증되지 않은 회원입니다.",
  403: "접근이 금지되었습니다.",
  404: "요청한 페이지를 찾을 수 없습니다.",
  500: "서버에서 오류가 발생했습니다.",
};

/* const ErrorFallback = (err) => {
  if (err.error.status === 401) {
    console.log(err.error.message);
  }
  return <div>{err.error.message}</div>;
};
export default ErrorFallback;
 */

const ErrorFallback = ({ error }) => {
  const errorCode = error.status || 400;
  const errorMessage =
    errorMessages[errorCode] || "예기치 못한 에러가 발생했습니다.";

  return (
    <>
      <p>{errorMessage}</p>
      <p>{error.message}</p>
    </>
  );
};
export default ErrorFallback;
