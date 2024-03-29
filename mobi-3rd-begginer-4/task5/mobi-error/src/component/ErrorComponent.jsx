const ErrorComponent = ({ error }) => {
    const err = new Error();
    // err.message = "인증되지 않은 회원입니다";
    err.status = {
        error: {
            401: {
                message: "401에러",
            },
            404: {
                message: "404에러",
            },
        },
    };
    // throw err;
    // if (err.status === 401) {
    //     err.message = "인증되지 않은 회원입니다";
    //     throw err;
    // } else if (err.status === 404) {
    //     err.message = "요청하신 리소스를 찾을 수 없습니다";
    //     throw err;
    // }
    return (
        <>
            <div>{err.status.error.message}</div>
        </>
    );
};
export default ErrorComponent;
