import { Suspense } from "react";
import "./App.css";
import RootLazyLoading from "./component/RootLazyLoading";

function App() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <RootLazyLoading />
            </Suspense>
        </div>
    );
}

export default App;
