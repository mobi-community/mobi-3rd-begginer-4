## 🌼Webpack

번들러중 하나인 webpack은 코드축소와 더불어 불필요한 코드를 제거하는 동작을 함으로써 웹사이트 성능과 로딩속도를 향상시킨다. 래퍼런스가 많고 안정적이지만 에셋 매니지먼트, 코드분할 등을 포함한 오래된 번들러로 복잡하고 느릴수 있다고 한다.

Webpack의 핵심 요소인 `Entry` 는 웹 자원을 변환하기 위해 필요한 최초 진입점으로 웹 어플리케이션의 구조와 내용이 담겨있는 파일을 묶어서 사용한다.

```
module.exports = {
  entry: './path/to/my/entry/file.js',
};
```

또한 `Output` 요소도 있는데 이 요소는 webpack이 생성한 번들을 내보낼 위치와 이 파일의 이름을 지정하는 방법을 알려준다.
`webpack.config.js` 파일에서 `output.filename`및 `output.path`속성을 사용하여 webpack에 번들의 이름과 번들을 내보낼 위치를 알려준다.

```
//webpack.config.js
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
};
```

## 🌻Vite

vite 는 비교적 최근에 출시된 번들러로 Dev 서버실행 속도를 개선하기위해 만들어졌다.
의존성과 소스코드를 나눠서 속도를 개선하고 코드 수정 시 자동으로 재빌드되는 HMR 기능을 제공한다고 한다. 또한 기본적으로 Vite는 네이티브 ES Module, 네이티브 ESM 동적 임포트, 그리고 import.meta를 지원하는 브라우저를 대상으로 빌드를 수행한다. Vite의 가장 큰 장점은 비교적 설정이 쉽고 속도가 빠르다는것이다.

## 🥀Webpack 과 Vite .. 무엇을 써야할까??

사실 장점들만 놓고 봐서는 Vite 가 더 좋다고 생각할것같다.
esbuild, native ESM 을 사용한 개발환경에서는 엄청나게 쾌적한 개발경험을 제공한다는 것에 동의한다. 그러나 webpack으로 잘 사용하고있는 프로덕션 환경에서는 Vite로 마이그레이션 했을때 config 설정에서 매우 복잡하다고 한다.

더더욱 대규모 프로젝트를 진행하는 상황이라면 프로덕션 환경에서 터지는 버그들을 잡기도 힘들고, 빌드가 안정적이지 않아서 현업에서도 의견이 많이 갈린다고 한다.
