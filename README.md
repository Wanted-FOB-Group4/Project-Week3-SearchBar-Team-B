<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
## Fuzzy Matching

#### 목적

검색어와 정확히 일치하는 결과가 아닌 검색어와 유사한 결과값들을 도출하는 것이 목적이다.

#### 목표

`Fuzzy Matching`으로 `filtering`된 검색어들을 정해진 규칙에 따라 정렬해서 보여준다.

초성 검색은 별로 의미 없다고 생각하여 제외하였습니다.

#### 정렬 우선순위

1. `input`에 입력된 글자와 가장 똑같은 글자를 많이 포함하는 검색어

   ex)

   `input` = 가염

   `searchValues`= [ "간염", "가염"]

   이러면 "가염"을 더 우선 순위에 둔다는 의미입니다.

2. `fuzzy matching`으로 뽑아낸 글자들 사이의 최대 거리 중 가장 짧은 거리를 가지 검색어

   ex)

   `input` = 염증

   `searchValues`= [ "염증", "염색체증"]

   이러면 "염증"을 더 우선 순위에 둔다는 의미입니다.

### 자세한 구현 방법

1. FuzzyMatching 구현 방법

   1. 글자 사이에 글자들이 올 수 있는 정규식만들기

      `/(a).*?(b).*?(c)/` => `abc`가 검색어일때 정규식

   2. 한글일때 한글을 인식할 수 있는 정규식을 유니코드로 이용해서 만들기

      1. 종성이 포함된 글자

         `(글자의 유니코드 - 44032) % 28`의 값이 0이 아닐때는 종성이 포함된 글자이므로 범위 없이 바로 글자를 리턴한다.

      2. 종성이 포함되지 않은 글자

         초성을 제외한 글자의 유니코드 시작 숫자 = 44032 => `가`의 유니코드

         종성으로 들어갈 수 있는 글자 갯수 = 27개 => 종성없을때 까지 포함 =>28개

         `가`일때 인식해야할 한글 범위 `가` ~`갛` => 28개

         그럼 유니코드의 범위는 `44032 ~ 44032 + 27`

         그럼 일반화를 하면 `글자의 유니코드 ~ 글자의 유니코드 + 27`범위의 글자를 모두 구하면 된다.

         범위를 구하는 정규식 : `/글자\\u시작유니코드-\\u마지막유니코드/`

      함수로 구현

      ```js
      const koreanCharAt = (target: string) => {
        const firstCode = '가'.charCodeAt(0)
        const lastCode = '힣'.charCodeAt(0)
        const targetCode = target.charCodeAt(0)

        if (targetCode >= firstCode && targetCode <= lastCode) {
          if ((targetCode - firstCode) % 28 > 0) return target
          const start = targetCode
          const end = start + 27
          const regExpString = `[${target}\\u${start.toString(16)}-\\u${end.toString(16)}]`
          return regExpString
        }

        return target // 한글이 아닌 글자는 그대로 리턴
      }
      ```

2. 검색어 내에서 가장 유의미한 Fuzzy Matching 결과 추출하기

   필요한 이유

   - `간염` 이라는 검색어로 인해 `인간의 간염` 이라는 추천 검색어가 나온다면 기존의 fuzzy matching의 결과는

     인**간**의 간**염** 이 결과값으로 나오게 됩니다.

   - `가`라는 검색어로 인해 `가`가 포함된 결과 보다 `간`이라는 글자가 포함된 결과가 나올 수 있습니다.

   구현 방법

   - `DFS`를 이용하여 구현하였으며

     - 해당 글자가 포함된 위치를 찾고 `DFS`
     - 모든 글자를 찾았을 경우 리턴
     - DFS를 진행하며 글자가 정확하게 일치하는 정도와 검색어에 따라 도출되는 fuzzy matching이 적용되는 글자 사이의 최대 거리를 저장합니다.

     그 함수들 중에서 가장 유사도가 높고 거리가 짧은 결과를 사용합니다.

3. 추천 검색어들 중 유의미한 결과를 상위에 노출하기

   위에서 도출된 결과를 가지고 유사도가 높고 거리가 짧은 순서대로 정렬하여 보여준다.
   <center>
=======
<p align="center">
<<<<<<< HEAD
>>>>>>> 8f5d501 (Document: README 중앙정렬 테스트)

# 검색어 추천이 있는 검색 창 구현

![TS badge](https://img.shields.io/badge/-Typescript-3178C6?style=flat-square&logo=TypeScript&logoColor=white) ![react badge](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=white) ![sass badge](https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=Sass&logoColor=white) ![redux badge](https://img.shields.io/badge/-Redux%20Toolkit-764ABC?style=flat-square&logo=Redux&logoColor=white) ![react-query badge](https://img.shields.io/badge/-React%20Query-FF4154?style=flat-square&logo=React%20Query&logoColor=white)

## 배포 페이지 { 링크 추가 }

=======
=======
<div style="text-align:center">
>>>>>>> 184290a (Document: 중앙정렬)
  <h1> 검색어 추천이 있는 검색 창 구현 </h1>
  <img src="https://img.shields.io/badge/-Typescript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"> <img src="https://img.shields.io/badge/-Redux%20Toolkit-764ABC?style=flat-square&logo=Redux&logoColor=white"> <img src="https://img.shields.io/badge/-React%20Query-FF4154?style=flat-square&logo=React%20Query&logoColor=white">
  <a href="/"><h2>배포 페이지</h2></a>
<<<<<<< HEAD
>>>>>>> f5b4e28 (Document: 중앙 정렬 테스트)
</p>
=======
</div>
<hr />
>>>>>>> 184290a (Document: 중앙정렬)
=======
<p align="center">
  <h1 align="center"> 검색어 추천이 있는 검색 창 구현 </h1>
  <p align="center">
  <img src="https://img.shields.io/badge/-Typescript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"> <img src="https://img.shields.io/badge/-Redux%20Toolkit-764ABC?style=flat-square&logo=Redux&logoColor=white"> <img src="https://img.shields.io/badge/-React%20Query-FF4154?style=flat-square&logo=React%20Query&logoColor=white">
  </p>
  <a href="/"><h2 align="center">배포 페이지</h2></a>
</p>
>>>>>>> 069229b (Document: README 중앙정렬)

# 과제 설명

## 폴더 구조

```
폴더 구조
```

## 동작

{ 메인 페이지 사진 }

- 메인 페이지는 [제공받은 본 링크](https://clinicaltrialskorea.com/)를 클론코딩하여 구성하였습니다.

{ 입력 동작 gif }

- 검색어를 입력할 때마다 Debouncing을 통해 시간차를 두어 데이터를 요청하고, 응답이 들어오면 Fuzzy Matching 알고리즘을 바로 적용하여 필터링 및 하이라이트된 데이터를 드랍다운에 출력해 주었습니다.

{ 빈 문자열일 경우 검색기록 사진 }

- 검색어가 존재하지 않을 경우 로컬 스토리지에 저장한 검색 기록을 불러내어 출력합니다.

{ 검색 결과 클릭 사진 }

- 검색어를 입력하고 Submit할 경우, 모달을 띄워 무엇을 검색하였는지 출력하였습니다.

## 구현 방법과 이유, 사용한 기술

### 컴포넌트 / 레이아웃 구성

- `react-router-dom`의 `Outlet`을 이용하여 페이지 레이아웃을 꾸미고, `SearchPage` 컴포넌트를 가운데에 배치해 주었습니다.

- `SearchPage` 컴포넌트는 아래의 `SearchForm`, `Dropdown` 컴포넌트를 포함합니다.

- 스타일링은 `scss`와 `css module`을 사용하였습니다.

- 단일 페이지 어플리케이션이라, 추가적인 라우팅 없이 루트 링크만을 사용하였습니다.

### SearchForm (검색어 입력 창)

- 입력값을 받아오기 위해 `onChange` 이벤트 핸들러를 설정하였습니다. 입력값을 지웠거나 빈 문자열만 존재할 때엔 여타 검색 엔진 웹과 같이 지금까지의 검색 결과를 보여주도록 전역 상태값을 이용하여 제어해 주었습니다.

- 키보드 입력에 따라 `input` 태그 내의 커서 위치나 `value`를 변경해 주어야 하므로 `onKeyDown` 이벤트를 설정하였습니다. 상하 키 입력 시에 데이터 재요청이 이루어지지 않고 현재의 검색 결과 그대로 커서만 이동해야 하므로, 전역 상태값을 이용하여 데이터 요청을 막고 드랍다운 내의 선택한 요소에 포커싱을 주었습니다.

- 드랍다운은 input 태그가 포커싱되었을 때만 출력해 주어야 하므로, `isFocus` 상태값을 `onFocus`, `onBlur` 이벤트 발생 시마다 재설정하는 방식으로 관리하였습니다.

### Dropdown (드랍다운)

- `Dropdown` 컴포넌트는 입력 값이 바뀔 때마다 / 검색 기록을 보여줄 때마다 데이터를 불러와 필터링 및 정렬 후 출력합니다.

- 검색 결과와 최근 검색 기록 중 무엇을 렌더링할지는 `searchForm` 의 입력값에 따라 결정되므로 전역 상태 `category`로 제어하였습니다.

- 키보드 입력 제어는 `searchForm` 컴포넌트에서 담당하므로, 이벤트 발생 시에 어떤 요소가 선택되었는지 정보 (`focusedIndex`) 를 전역 상태값으로 가져와 해당 요소에 하이라이트 디자인을 적용하였습니다. 또한 선택한 커서가 바뀔 때마다 실제 검색 창처럼 `input` 태그 내의 값이 바뀌도록 하였습니다.

### 모달

- 검색 후 결과를 실제 검색 페이지처럼 보여주기 위하여 모달을 삽입하였습니다.

- `react portal`을 이용하여 `root` 태그 바깥에 위치한 태그에 포탈을 연결하고, `root` 태그 내부의 컴포넌트 조작으로 모달을 제어하였습니다.

- 모달 제어는 여러 컴포넌트에서 이루어져야 했기에 모달 열림 / 닫힘 조건과 모달에서 보여줄 데이터를 `redux`를 사용하여 전역으로 관리하였습니다.

- `input`이 `submit`될 때 모달이 열릴 수 있도록 구현하였고, 입력 값을 업데이트 시켜주었습니다.

### 데이터 요청

- `react-query`를 이용하여 같은 키를 가진 쿼리에 대하여 캐싱을 수행하였습니다.

- API의 속도가 많이 느린 편이고, Fuzzy Matching을 구현하기 위해서는 이미 존재하는 검색어 목록에서 사용자의 검색어를 예측할 수 밖에 없어 제공받은 `xml` 데이터를 `JSON`으로 변환하여 사용하였습니다.

- 쿼리 키에는 검색어 (`searchValue`) 를 포함시켜, 같은 검색어에 대하여 같은 쿼리로 판단하고 불필요한 데이터 요청을 막았습니다.

- 데이터를 받아오는 함수 `getDiseaseDataFiltered`는 Fuzzy Matching 알고리즘으로 필터링을 진행한 데이터를 반환하므로, 모든 데이터가 캐싱되지 않고 필터링된 데이터가 캐싱되어 같은 키에 대해 필터링 과정 또한 생략할 수 있도록 하였습니다.

- 검색어를 입력하는 `input`에서 `onChange` 이벤트가 발생할 때마다 요청을 보내는 것이 아닌, `Debounce` 훅을 구현하여 특정 시간마다 한 번씩만 전역 상태값으로 저장하고, `useQuery` 훅에서 전역 상태값의 변화를 감지할 때마다 요청을 수행하는 방식으로 API 요청 횟수를 줄였습니다.

- 서버에서 데이터를 받아오지 않고 `JSON`을 읽어들이는 방식을 사용했기 때문에, 서버에서의 값에 변동이 없다고 판단하고 `cacheTime`을 `Infinity`로 설정하였습니다. 따라서 캐시는 페이지 내에서 무한 지속됩니다.

- `enabled` 속성으로 `searchValue`가 빈 문자열이 아니거나, API 요청이 필요할 때만 요청을 보낼 수 있도록 조건을 추가하여 필요한 요청만 보낼 수 있도록 하였습니다.

- 응답이 돌아올 때마다 `fetched` 문구를 콘솔에 출력하여 쉽게 볼 수 있도록 하였습니다.

### Fuzzy Matching 알고리즘

### 어려웠던 점

- 키 이벤트를 적용할 때, `input` 태그의 값이 바뀌고 `useQuery`에 의해 데이터가 재요청되면서 추천 검색어가 잘못 표시되는 문제가 있었습니다. 검색창에 보여지는 `inputValue` 상태값은 변화하되 실제로 요청되는 검색어인 `searchValue`는 변하지 않도록 막아야 했기 때문에, `isApiBlocked` 상태값을 추가하여 불필요한 데이터 요청을 보내지 않도록 막아주는 방식으로 해결하였습니다.

- 또한 방향키를 움직일 때, `input` 태그 내의 문자열 커서는 맨 오른쪽에 유지되기를 원했지만 위쪽 화살표를 누를 때마다 커서가 맨 왼쪽으로 이동하는 문제가 발생하였습니다. 처음에는 `input` 커서 제어까지 구현해야 할까 싶어 막막했지만, `e.preventDefault()` 로 간단히 해결되는 문제였습니다.

- `react-query`를 본 과제에서 처음 사용하여 익숙해지는 데까지 시간이 조금 걸렸는데, 같은 검색어를 입력했음에도 검색어 캐싱이 되지 않아 끊임없이 재요청을 하는 문제가 있었습니다. 원인은 `useQuery` 훅의 요청 방식을 이해하지 못하고 `useEffect` 내에서 `searchValue`가 바뀔 때마다 `refetch()`를 시도했기 때문으로, `refetch()`를 사용하지 않고 `cacheTime`과 `staleTime`을 적절히 적용하여 캐싱에 성공하였습니다.

<hr />

<h2 align="center">기여한 사람들</h2>
<p align="center">
<table align="center">
  <thead>
    <tr>
      <th><a href="https://github.com/kec0130">🌅 고은채</a></th>
      <th><a href="https://github.com/HyeongSeoku">🌇 김형석</a></th>
      <th><a href="https://github.com/yhnb3">🌠 엄강우</a></th>
      <th><a href="https://github.com/chichoon">🏙 최지윤</a></th>
    </tr>
  </thead>
</table>
</p>
