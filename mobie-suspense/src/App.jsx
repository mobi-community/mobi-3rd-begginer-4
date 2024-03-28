import RootLazyLoading from "./component/RootLazyLoading"
import { Suspense } from "react"
function App() {
  return (
    <Suspense fallback={<h1>Loading....</h1>}>
      <RootLazyLoading />
    </Suspense>
  )
}

export default App
