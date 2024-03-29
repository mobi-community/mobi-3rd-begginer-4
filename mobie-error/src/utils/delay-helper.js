export const createDelayedPromise = (value, delay, status) =>
  new Promise((resolve, reject) =>
    status
      ? setTimeout(() => resolve(value), delay)
      : setTimeout(() => reject(new Error('error-code')), delay)
  )
