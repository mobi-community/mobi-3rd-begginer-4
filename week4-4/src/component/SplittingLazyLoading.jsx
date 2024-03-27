import { createDelayedPromise } from "../utils/delay-helper";
import { promiseWrapper } from "../utils/promise-wrapper";

const fetchingData = promiseWrapper(
  createDelayedPromise("my name is mobi", 5000)
);
// createDelayedPromise : 주어진 시간을 resolve하는 promise 생성 -> 5초 후 값 반환
// promiseWrapper : Promise를 래핑하여 해당 Promise가 완료될 때까지 대기할 수 있는 객체를 반환

const SpittingLazyLoading = () => {
  const data = fetchingData.read();

  return <div>{data}</div>;
};
export default SpittingLazyLoading;
