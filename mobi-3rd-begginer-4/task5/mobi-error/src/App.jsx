import "./App.css";
import ErrorComponent from "./component/ErrorComponent";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback(err) {
    if (err.error.status === 401) {
        return <div>인증되지 않은 회원입니다 </div>;
    }
    if (err.error.status === 404) {
        return <div>페이지를 찾을 수 없습니다.</div>;
    }
    return <div>예기치 못한 에러가 발생하였습니다</div>;
}

function App() {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <ErrorComponent error={401} />
        </ErrorBoundary>
    );
}

export default App;
