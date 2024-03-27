const ErrorFallBack = ({ error }) => {
    let errorMsg = "예기치 못한 에러가 발생했습니다.";

    if (error.status === 401) {
        errorMsg = "인증되지 않은 회원입니다.";
    } else if (error.status === 404) {
        errorMsg = "요청한 페이지를 찾을 수 없습니다.";
    } else if (error.status === 500) {
        errorMsg = "서버 에러 발생.";
    }

    return (
        <div>
            <p>{errorMsg}</p>
            <p> 상세 : {error.message}</p>
        </div>
    );
};
export default ErrorFallBack;
