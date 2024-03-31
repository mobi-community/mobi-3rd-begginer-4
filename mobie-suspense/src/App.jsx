import RootLazyLoading from "./component/RootLazyLoading"
import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
function App() {
  return (
    <ErrorBoundary fallback={<h1 style={{ color: "red" }}>Fail...</h1>}>
      <Suspense fallback={<h1>Loading....</h1>}>
        <RootLazyLoading />
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
