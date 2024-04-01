import "./App.css";
import ErrorComponent from "./component/ErrorComponent";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallBack from "./component/ErrorFallback";

function App() {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallBack}>
            <ErrorComponent error={404} />
        </ErrorBoundary>
    );
}

export default App;
