import { Suspense } from "react";
import { createDelayedPromise } from "../utils/delay-helper";
import { promiseWrapper } from "../utils/promise-wrapper";
import SpittingLazyLoading from "./SplittingLazyLoading";

const fetchingData = promiseWrapper(createDelayedPromise("hello", 3000));

const RootLazyLoading = () => {
    const data = fetchingData.read();

    return (
        <div>
            {data}
            <Suspense fallback={<div>Loading....</div>}>
                <SpittingLazyLoading />
            </Suspense>
        </div>
    );
};
export default RootLazyLoading;
