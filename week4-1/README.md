# [핵심 웹 집표(Core Web Vital)](https://web.dev/articles/vitals?hl=ko)이란?

- Google에서 검색 순위 알고리즘의 일부로 사용하는 웹 성능 메트릭
- 웹 사이트가 검색 엔진 결과에 표시되는 위치에 영향을 미치는 세 가지 웹 성능 측정값
  - **<span style="color: #E12301">가장 기본적인 핵심 요소 세 가지 : LCP, FID, CLS</span>**
- 사용자 경험을 측정하는 데 사용되는 중요한 웹 성능 지표의 모음(구글의 표준화된 측정 항목 집합)
  - <span style="color: #E12301; fontWeight: 700px">웹 페이지의 로드 시간, 상호 작용 가능성 및 안정성</span>을 측정하여 사용자가 웹 페이지를 얼마나 잘 경험하는지에 대한 통찰력을 제공

<div style="border: 2px solid #eee; borderRadius: 15px; padding: 20px">
<span style="fontWeight: 700; fontSize: 20px; color: orange">
  💡 측정 주요 항목 </span>

- **LCP** (**Largest Contentful<sup style="color: #E12301">\*</sup> Paint,** 최대 콘텐츠풀 페인트)

  ⇒ 로딩 속도를 측정하는 Paint

> **[LCP에서 콘텐츠로 판단하는 요소]**
>
> 1. img 요소
> 2. svg 내의 image 요소
> 3. 미리보기, 이미지가 사용되는 video
> 4. url()함수와 같이 이미지가 백그라운드로 로드되는 요소
> 5. 텍스트를 포함하는 Block 레벨의 요소
> 6. 텍스트를 포함하는 인라인 레벨의 요소

- 웹 페이지가 완전히 로드되는 데 걸리는 시간을 측정하는 것이 아니라, <span style="fontWeight: 700; backgroundColor: #90E0A9">가장 중요한 부분이 로드되는 시점</span>에만 집중
<div style="color: #E12301; fontSize: 12px; border: 1px solid #eee; borderRadius: 15px; padding: 20px; backgroundColor: #A8E0DB">
  <span style="fontWeight: 700">가장 중요한 부분이 로드되는 시점이란?</span>
  <br>- 뷰포트 내에서 가장 큰 페이지 요소(큰 텍스트 블록, 이미지 또는 비디오)를 표시하는데 걸리는 시간 <br/>- 사용자가 페이지의 가장 큰 콘텐츠 요소를 볼 때 까지 걸리는 시간 <br/><span style="color: gray; fontSize: 12px">* 뷰포트 : 웹 페이지 사용자가 별도의 스크롤 없이 볼 수 있는 영역</span></div

- 전체 웹 페이지를 로드하는 데 걸리는 시간을 측정하지는 않지만, 웹 페이지가 얼마나 빠르게 로드되고 있는지를 나타내는 좋은 벤치마크 제공
- Google의 가이드라인에서는 **2.5초 미만인 경우** LCP 측정값을 <span style="color: green" >**“양호”**</span>로 분류

> 📌 <span style="color: #3A56E0; fontWeight: 700" >LCP 측정값에 따른 성능</span>

          - <span style="fontWeight: 700" >2.5초 이내</span> : 좋음

- <span style="fontWeight: 700" >2.5초 이상 ~ 4초 이내</span> : 개선 필요
- <span style="fontWeight: 700" >4초 이상</span> : 나쁨

---

- **FID** (**First Input Delay,** 첫 번째 입력 지연)
  ⇒ 페이지 상호 작용성을 측정하는 첫 번째 입력 Delay
  - 사용자가 페이지와 상호 작용하기 위해 첫 번째 입력을 선택한 후 브라우저가 해당 입력에 대한 응답을 제공하기까지 걸리는 시간을 측정
  - 브라우저에서 다음 액션이 발생되는 시간까지의 길이를 측정한 지표
  - 요청받은 액션을 처리하는 데 걸리는 시간이 아닌, 입력 기연을 시키는 시간이 중요
  - Google의 가이드라인에 따르면 **100ms 이하**일 경우 <span style="color: green" >**“양호”**</span>한 FID로 분류

> 📌 <span style="color: #3A56E0; fontWeight: 700" >FID 측정값에 따른 성능</span>

     **- 100ms 미만** : 양호
     **- 100ms 초과 ~ 300ms 미만** : 개선 필요
     **- 300ms 이상** : 나쁨

---

- **CLS** (**Cumulative Layout Shift,** 누적 레이아웃 이동)

  ⇒ 시각적 안정성을 측정하는 누적 레이아웃 이동

  - 랜더링 이후 **사용자가 기대하지 않은 “레이아웃의 움직인 거리”에 대한 측정**

  > ❓ **그렇다면 사용자가 기대한 레이아웃의 움직임이란?**
  >
  > 1. 웹 페이지 내에서 마우스 클릭이나 키보드 입력 등 **이벤트를 발생시킨 시점**부터 0.5초 이내에 움직이는 것
  > 2. **transform과 같이 CSS에 의한 애니메이션 이동**은 측정에서 제외
  >    엘리먼트 요소의 이동은 페이지 내 콘텐츠에 대한 강조 혹은 안내를 유도하는 요소로 사용될 수 있고, 이는 유저에게 더 좋은 UX를 제공할 수 있다.

    <div style="color: #E12301; fontSize: 14px; border: 1px solid #eee; borderRadius: 15px; padding: 20px; backgroundColor: #A8E0DB"><span style="fontWeight: 700">* 주의 *</span></br>- 사용자 입력이 아닌 마우스 이동, 마우스 스크롤, hover 등의 이벤트에 대해서는 여전히 레이아웃 움직임에 대해 측정 <br/>- Infinite Scroll 기능은 CSL 수치에 많은 영향을 끼칠 수 있다. </div>
  - 모바일 중심의 지표
  - 페이지의 콘텐츠가 로드되는 동안 레이아웃이 얼마나 안정적인지 측정
    (= 페이지 요소가 화면에서 얼마나 자주 이동하는지 측정)
    - 페이지를 스크롤하거나 클릭할 때 의도하지 않은 레이아웃 변경이 발생하는 정도
    (**화면 요소의 이동** ex. 광고, 이미지 및 기타 레이아웃 요소 )
    - 페이지의 안정성과 관련이 있으며, 사용자가 콘텐츠를 읽거나 클릭하는 동안 예상치 못한 레이아웃 변경이 발생하지 않도록 하는 것이 중요
     ><span style="color: #3A56E0; fontWeight: 700" >📌 **CLS 측정값에 따른 성능**</span>
     **- 0.1 미만** : 좋음
     **- 0.1 이상 ~ 0.25미만**  : 개선 필요
     **- 0.25 이상** : 나쁨
    
    ✅ CLS 측정 방법
    영향 비율 * 거리 비율 = 레이아웃 이동 점수
    
    
    ---

- **TTFB** (**Time to First Byte**, 첫 번째 바이트까지의 시간)

  - 사용자가 웹 페이지를 요청하고 그 페이지의 첫 번째 바이트를 받기까지 걸리는 시간 (FCP, LCP같은 사용자 중심 측정 항목보다 먼저 발생)
  - 웹 서버가 요청에 너무 느리게 응답하는 경우를 식별하는 데 도움이 됨
  - 서버 응답 시간의 신속성을 평가하는데 사용
    ![](https://velog.velcdn.com/images/jjjiyoung0130/post/969e4b26-366f-472a-adea-94595f223427/image.png)
    <span style="fontSize: 14px">*네트워크 요청 단계 및 관련 타이밍을 보여주는 다이어그램 TTFB는* `startTime`*에서* `responseStart` *사이의 경과 시간을 측정합니다.*</span></br>
    [ 리디렉션 시간 → 서비스 워커 시작 시간(해당하는 경우) → DNS 조회 → 연결 및 TLS 협상 → 요청, 응답의 첫 번째 바이트가 도착할 때 까지 ]
    **\* 연결 설정 시간 및 백엔드에서 지연 시간을 줄이면 TTFB를 줄일 수 있다.**

  > <span style="color: #3A56E0; fontWeight: 700" >📌 **TTFB 측정값에 따른 성능**</span>
  > **- 800ms 이하** : 좋음
  > **- 800ms 초과 ~ 1800ms 미만** : 개선 필요
  > **- 1800ms 이상** : 나쁨

  ***

- **FCP** (**First Contentful Paint,** 최초 콘텐츠 풀 시간)
  - 사용자가 처음 페이지로 이동한 시점부터 페이지 콘텐츠의 일부가 화면에 랜더링된 시점까지의 시간 측정
  - <span style="fontWeight: 700; backgroundColor: #90E0A9">첫 번째 콘텐츠 요소가 랜더링될 때 모든 콘텐츠가 랜더링 되는 것은 아니며,</span> 이는 **“페이지의 기본 콘텐츠가 로드가 완료된 시점을 측정”**하는 **FCP**와 **“최대 콘텐츠 랜더링 시간” LCP**을 구분하는 중요한 차이점
  * **핵심 사항:**
     - FCP에는 이전 페이지의 언로드 시간, 연결 설정 시간, 리디렉션 시간, [첫 바이트까지의 시간 (TTFB)](https://web.dev/articles/ttfb?hl=ko)이 포함된다. 이는 현장에서 측정할 때 중요할 수 있으며 필드 및 실험실 측정 간의 차이로 이어질 수 있다.
  > <span style="color: #3A56E0; fontWeight: 700" >📌 **FCP 측정값에 따른 성능**</span>
  > **- 1.8초 이하** : 좋음
  > **- 1.8초 초과 ~ 3초 미만** : 개선 필요
  > **- 3초 이상** : 나쁨

</div>

<aside>
❓ **SEO에서 CWV이 중요한 이유**

⇒ Google에서는 좋은 사용자 경험을 제공하는 웹 사이트에 우선 순위를 두고 싶다는 점을 분명히 밝혔으며, 코어 웹 바이탈은 그러한 경험을 측정하는 한 가지 방법이다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/82ae878c-ca02-4376-af7c-923e43d1eba2/a1edb634-f3a9-4c93-8263-611f842d42c9/Untitled.png)

1. 사용자 경험 개선
2. 검색 엔진 순위
3. 모바일 최적화
4. 경쟁 우위 확보

</aside>

    *참고자료
    https://www.cloudflare.com/ko-kr/learning/performance/what-are-core-web-vitals/
    https://web.dev/articles/ttfb?hl=ko
