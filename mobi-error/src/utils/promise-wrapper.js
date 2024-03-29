export const promiseWrapper = (promise) => {
	/** fetching 상태를 담은 변수 */
	let status = 'pending'
	/** 응답이 성공적일 경우, 그 결과를 저장하는 변수 */
	let result

	console.log(promise)

	/** 응답결과 */
	const resultPromise = promise.then(
		(value) => {
			console.log(value)
			status = 'success'
			result = value
		},
		(error) => {
			status = 'error'
			result = error
		},
	)

	const read = () => {
		switch (status) {
			case 'pending':
				throw resultPromise // promise 던져버리기
			case 'success':
				return result // 수신양호, 결과값 반환
			case 'error':
				throw result // 수신불량, 에러 던지기
			default:
				throw new Error('알 수 없는 오류가 발생했습니다.')
		}
	}

	return {read} // 함수를 반환
}
