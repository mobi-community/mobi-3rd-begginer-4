import { Suspense } from "react";
import "./App.css";
import RootLazyLoading from "./component/RootLazyLoading";

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RootLazyLoading />
        </Suspense>
    );
}

export default App;
