const ErrorFallBack = ({ error, resetErrorBoundary }) => {
    let errorMsg = "예기치 못한 에러가 발생했습니다.";

    switch (error.status) {
        case 401:
            errorMsg = "인증되지 않은 사용자입니다.";
        case 404:
            errorMsg = "요청한 페이지를 찾을 수 없습니다.";
        case 500:
            errorMsg = "서버에서 에러가 발생했습니다.";
    }

    return (
        <div>
            <p>{errorMsg}</p>
            <p> 상세 : {error.message}</p>
            <button onClick={() => resetErrorBoundary()}>재시도</button>
        </div>
    );
};
export default ErrorFallBack;
