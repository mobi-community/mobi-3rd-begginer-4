import "./App.css";
import ErrorComponent from "./component/ErrorComponent";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./component/ErrorFallback";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ErrorComponent error={500} />
    </ErrorBoundary>
  );
}

export default App;
