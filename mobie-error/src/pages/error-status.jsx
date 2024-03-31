import { useState, useEffect } from 'react'
import { promiseWrapper, createDelayedPromise } from '../utils/'

const ErrorStatus = ({ststus}) => {
  const [fetchingData, setFetchingData] = useState(null)
  
  useEffect(() => {
    const fetchData = promiseWrapper(
      createDelayedPromise('요청이 성공했습니다', 1000, ststus)
    )
    setFetchingData(fetchData)
  }, [])

  if (!fetchingData) return null

  const data = fetchingData.read()

  return <>{data}</>
}

export default ErrorStatus
