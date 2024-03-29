import {useSearchParams} from 'react-router-dom'
import {fetchSearchResultNumber} from '../utils/search-fetch'

const searchResultNumber = fetchSearchResultNumber()

const SearchResult = () => {
	const [params, setParams] = useSearchParams()

	if (!params.has('keyword')) {
		return <></>
	}
	const keyword = params.get('keyword')
	const data = searchResultNumber?.read()
	console.log(data)

	return (
		<div className='flex items-center justify-center'>
			<p>'{keyword}' 검색어에 대해</p>
			&nbsp;
			<p className='text-purple-500 text-2xl'>{data && data}</p>
			<p> (건) 의 결과를 찾았습니다.!</p>
		</div>
	)
}

export default SearchResult
