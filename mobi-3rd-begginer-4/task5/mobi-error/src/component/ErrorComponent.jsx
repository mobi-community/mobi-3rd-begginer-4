const ErrorComponent = ({ error }) => {
    const err = new Error();
    err.status = error;
    throw err;
};
export default ErrorComponent;
