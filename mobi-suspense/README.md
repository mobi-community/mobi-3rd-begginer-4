# Susepnse 실습

## 요구사항
- 3초 동안 "Loading..." 이 보이다가 "hello" 출력
- 출력된 "hello" 아래, "Loading..." 이 약 2초 정도 더 보이다가 "my name is mobi" 출력

## 알게 된 점
### Loading 상태 관리는 컴포넌트 단위로 이뤄져야 한다.
  - 다음과 같이 작성할 경우, pending 상태에서 로딩 컴포넌트가 보이지 않는 이슈가 있다.
    ```javascript
    const SomePage = () => {
      const data = fetchingData.read();
      return (
        <div>
          <Suspense fallback={<LoadingComponent>}> // `LoadingComponent` 안 보인다..
            <h1>{data}</h1> 
          </Suspense>
        </div>
      )
    }
    export default SomePage
    ```
  
  - 컴포넌트 단위로 throw Promise 가 이뤄진다.
  - LoadingComponent 는 throw 한 컴포넌트를 대체하여 render 된다.

### suspense 를 활용해 pending 상태임을 사용자에게 알릴 수 있다.
  연산량이 많거나 데이터 패칭을 위한 비동기 로직이 promise 혹은 error 를 throw 하지 않는다면, suspense 사용이 가능하도록 처리하는 방법을 알게 되었다. 👍