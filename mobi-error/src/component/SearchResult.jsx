import {useSearchParams} from 'react-router-dom'

const SearchResult = ({fetchResult}) => {
	const [params] = useSearchParams()
	const result = fetchResult.read()

	if (!params.has('keyword')) return <></>
	const keyword = params.get('keyword')

	return (
		<div className='flex items-center justify-center'>
			<p>'{keyword}' 검색어에 대해</p>
			&nbsp;
			<p className='text-purple-500 text-2xl'>{result && result}</p>
			<p> (건) 의 결과를 찾았습니다.!</p>
		</div>
	)
}

export default SearchResult
