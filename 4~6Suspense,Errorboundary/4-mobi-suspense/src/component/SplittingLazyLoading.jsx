import { Suspense } from 'react';
import { createDelayedPromise } from '../utils/delay-helper';
import { promiseWrapper } from '../utils/promise-wrapper';

const fetchingData = promiseWrapper(createDelayedPromise('my name is mobi', 2000));

const SpittingLazyLoading = () => {
  const data = fetchingData.read();

  return <div>{data}</div>;
};
export default SpittingLazyLoading;
