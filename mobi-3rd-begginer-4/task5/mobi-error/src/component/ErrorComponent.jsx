const ErrorComponent = ({ error }) => {
    const err = new Error();
    err.message = "인증되지 않은 회원입니다";
    err.status = error;
    throw err;
};
export default ErrorComponent;
