import {promiseWrapper} from './promise-wrapper'

const getServerResponse = (delay) => {
	/** 검색결과 건 수 (1 건 ~ 200 건) */
	const searchResultNumber = Math.floor(Math.random() * 200 + 1)
	const error = new Error()

	if (delay >= 10000) {
		error.message = '서버에 알 수 없는 오류가 발생했습니다.'
		error.status = 500
		return error
	}
	if (delay >= 9000) {
		error.message = '구현되지 않은 기능에 접근하였습니다.'
		error.status = 501
		return error
	}
	if (delay >= 8000) {
		error.message = 'Gateway 상태가 불량합니다.'
		error.status = 502
		return error
	}
	if (delay >= 7000) {
		error.message = '요청 시간이 초과되었습니다.'
		error.status = 408
		return error
	}
	if (delay >= 6000) {
		error.message = '요청한 리소스를 찾을 수 없습니다.'
		error.status = 404
		return error
	}
	if (delay >= 5000) {
		error.message = '요청한 리소스에 대한 접근은 금지되었습니다.'
		error.status = 403
		return error
	}
	if (delay >= 4000) {
		error.message = '해당 리소스에 대한 접근 권한이 없습니다.'
		error.status = 401
		return error
	}
	if (delay >= 3000) {
		error.message = '잘못된 요청입니다.'
		error.status = 400
		return error
	}
	return searchResultNumber
}

/** '검색 결과 갯수' 요청 */
export const fetchSearchResultNumber = () => {
	let response = null
	/** 지연시간 (1 초 ~ 10 초) */
	const delayMillSecond = Math.floor(Math.random() * 10 + 1) * 1000

	/**
	 * 서버로 데이터 요청
	 * 요청-응답 과정이 늦어지는 경우를 가정
	 */
	const promise = new Promise((resolve, reject) =>
		setTimeout(() => {
			response = getServerResponse(delayMillSecond)
			if (response instanceof Error) {
				console.log('reject 할거야')
				reject(response)
			} else {
				console.log('resolve 할거야')
				resolve(response)
			}
		}, delayMillSecond),
	)

	return promiseWrapper(promise)
}
