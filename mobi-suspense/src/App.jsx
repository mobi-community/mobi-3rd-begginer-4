import { Suspense } from "react";
import "./App.css";
import LoadingComponent from "./component/LoadingComponent";
import RootLazyLoading from "./component/RootLazyLoading";

const App = () => {
  return (
    <Suspense fallback={<LoadingComponent/>}>
      <RootLazyLoading />
    </Suspense>
  )
}

export default App;
