const ErrorComponent = ({ error }) => {
    const err = new Error();
    err.message = "에러 발생 컴포넌트";
    err.status = error;
    throw err;
};
export default ErrorComponent;
