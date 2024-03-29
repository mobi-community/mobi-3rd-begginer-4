import {Suspense} from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import {useNavigate, useSearchParams} from 'react-router-dom'
import ErrorFallback from './component/ErrorFallback'
import LoadingFallback from './component/LoadingFallback'
import SearchResult from './component/SearchResult'

const App = () => {
	const [params, setParams] = useSearchParams()
	const navigate = useNavigate()

	const keyword = params.get('keyword')

	const onSearch = (e) => {
		e.preventDefault()
		const inputValue = e.target.elements[0].value
		setParams({keyword: inputValue})
	}

	return (
		<div className='w-dvw h-dvh flex justify-center items-center flex-col gap-10'>
			<h3>🌈 알흠다운 검색 사이트 📄</h3>
			<form
				onSubmit={onSearch}
				className='w-full h-fit flex justify-center gap-5'
			>
				<input className='text-center text-gray-500 rounded-md' />
				<button
					type='submit'
					className='w-fit h-fit px-2 py-1 border-solid rounded-md border-black border-2 active:bg-gray-600'
				>
					search
				</button>
			</form>
			<div className='w-full h-64 flex flex-col justify-start items-center'>
				<ErrorBoundary
					FallbackComponent={ErrorFallback}
					onReset={() => {
						navigate('/')
					}}
				>
					<Suspense fallback={<LoadingFallback />}>
						{keyword && <SearchResult />}
					</Suspense>
				</ErrorBoundary>
			</div>
		</div>
	)
}

export default App
