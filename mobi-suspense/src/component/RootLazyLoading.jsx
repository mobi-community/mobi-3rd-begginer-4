import { Suspense } from "react";
import { createDelayedPromise } from "../utils/delay-helper";
import { promiseWrapper } from "../utils/promise-wrapper";
import LoadingComponent from "./LoadingComponent";
import SpittingLazyLoading from "./SplittingLazyLoading";

const fetchingData = promiseWrapper(createDelayedPromise("hello", 3000));

const RootLazyLoading = () => {
  const data = fetchingData.read();

  return (
    <div>
      {data}
      <Suspense fallback={<LoadingComponent/>}>
        <SpittingLazyLoading />
      </Suspense>
    </div>
  );
};
export default RootLazyLoading;
