const ErrorComponent = ({ error }) => {
  const err = new Error();
  err.message = "Error Component";
  err.status = error;
  throw err;
};
export default ErrorComponent;
