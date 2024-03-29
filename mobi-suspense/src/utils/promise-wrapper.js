export const promiseWrapper = (promise) => {
  let status = "pending";
  let result;

  const s = promise.then(
    (value) => {
      console.log(value)
      status = "success";
      result = value;
    },
    (error) => {
      console.log(error)
      status = "error";
      result = error;
    }
  );

  return {
    read() {
      switch (status) {
        case "pending":
          throw s; //Suspense rendering
        case "success":
          return result;
        case "error":
          throw result;
        default:
          throw new Error("Unknown status");
      }
    },
  };
};
