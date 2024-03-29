import {useEffect, useState} from 'react'
import {promiseWrapper} from '../utils/promise-wrapper'
import {fetchSearchResultNumber} from '../utils/search-fetch'

/** 검색 결과 갯수 로드 hook */
export const useSearchResultNumber = () => {
	const [searchResultNumber, setSearchResultNumber] = useState(-1)

	const responseOrPromise = promiseWrapper(fetchSearchResultNumber())

	useEffect(() => {
		const data = responseOrPromise.read()
		if (data) {
			setSearchResultNumber(data)
		}
	}, [])

	return {searchResultNumber}
}
