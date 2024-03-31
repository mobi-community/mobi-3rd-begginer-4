export const createDelayedPromise = (value, delay, isSuccess=true) =>
  new Promise((resolve, reject) =>
    isSuccess
      ? setTimeout(() => resolve(value), delay)
      : setTimeout(() => reject(value), delay)
  )
