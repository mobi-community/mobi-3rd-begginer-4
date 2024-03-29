const ErrorFallback = ({error, resetErrorBoundary}) => {
	const onRetry = () => {
		console.log('adsf')
		resetErrorBoundary()
	}

	return (
		<div className='flex flex-col justify-center items-center'>
			<h3>{error.status && error.status}</h3>
			<p>{error.message && error.message}</p>
			<button onClick={onRetry}>다시 시도하기</button>
		</div>
	)
}

export default ErrorFallback
