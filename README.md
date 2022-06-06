## 크로우즈세븐 777

---

### 팀원

- FE: 염종은,유하은,박슬기,김완영,신윤지
- BE: 박상연,김민정

#### 기술 스택

- `FE`: JavaScript, ReactJs, react-router, HTML5, SASS

- `BE`:Django, Python, MySQL, JWT, Bcrypt

#### Colaboration Tool

- Git, Trello, Slack

---

### 데모 영상

https://youtu.be/--gfsEindSE

---

###  프로젝트 소개 

* 키친웨어 뿐 아니라 라이프 스타일 제품군들을 판매하는 커머스 사이트를 선정했습니다.
* 2주라는 짧은 시간에 사이트를 만들기 위해 [크로우캐년](https://crowcanyon.co.kr/index.html)를 참조하였습니다.
* 실무 수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
* 이 프로젝트에서 사용하고 있는 로고와 배너는 해당 프로젝트 팀원 소유이므로 해당 프로젝트 외부인이 사용할 수 없습니다.

---

###  개발 인원 및 기간 
**개발기간** : 2022/05/24~2022/06/04

---
### 구현 기능


- 메인 페이지
 ```
   - 스크롤에 따른 효과
   - 캐러셀 구현
```
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/96937488/172107635-95509f5f-aab6-4dd1-80e8-81a1b994d9c5.gif)

---
- Navbar
 ```
   - 드롭다운 메뉴바 구성
   - 검색 및 필터링 가능
   - 상단 버튼을 이용한 라우팅 ( 로그인, 회원가입, 로그아웃, 상품페이지 )
```
![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/96937488/172108429-c8105cd7-311f-4e62-b7e9-b5e69599de9d.gif)


- 회원가입
 ```
   - 유효성 검사를 통한 회원가입
   - 잘 못된 입력값을 입력시 바로바로 텍스터로 알려줌
   - input창에 다 입력값을 잘 입력해야 버튼이 활성화 되어 스타일이 변함
```
![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/96937488/172111501-0b0c35c2-c35b-4231-8a08-61c014d2b735.gif)

- 로그인
 ```
   - 회원가입을 통해 백엔드에 저장된 아이디와 비밀번호로 로그인 가능
   - 잘 못된 값을 입력하면 버튼 클릭시 알림창을 띄움
   - 제대로 된 아이디와 비밀번호로 로그인시 메인창으로 이동
```
![ezgif com-gif-maker (6)](https://user-images.githubusercontent.com/96937488/172112471-cf62aaae-a14c-4269-af34-aea1a9c7583b.gif)

- 상품 리스트

```
- 카테고리 선택에 따른 맞춤 상품 리스트 정렬
- 배열 형태로 정렬되어진 상품 구조
- 페이지네이션 구현
- 상품 정보에 따른 정렬 기능 추가 (인기순, 가격순 등)
```
![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/96937488/172111940-a6073dd7-0371-492c-9fe4-4c6170e2911d.gif)

- 장바구니

```
- 내가 선택한 상품을 장바구니에 저장 가능
- 장바구니에 나온 상품의 수량을 변화가능
- 수량에 따른 구매가격의 변화 (총 가격이 5만원 이상이 되면 무료 배송)
- 일정 상품을 선태하여 장바구니에서 삭제가능
```
![ezgif com-gif-maker (5)](https://user-images.githubusercontent.com/96937488/172112112-edbf1ed8-746f-4782-b506-7f0e12244bff.gif)

- 리뷰페이지

```
- 구입한 상품을 리뷰쓰기 가능
- 로그인 전에 나오지 않았던 버튼이 로그인 후에 리뷰쓰기 버튼이 나옴
- 내가 구매한 상품만 선택이 가능하고 리뷰를 쓸 수 있음
```
![ezgif com-gif-maker (7)](https://user-images.githubusercontent.com/96937488/172113134-3b1cfab3-d0ce-43f2-aaa0-b6ce17742e18.gif)


### 내가 맡은 부분
- login,회원가입,마이페이지,주문조회

```
- 유효성 검사를 통해 회원가입 로그인 하기
- 로그인이 잘 되면 토큰 여부에 따라 로그아웃 버튼이 나오기
- 로그아웃이 아되면 로그인 버튼이 활성화
- 주문한 물건이 주문조회를 통해 주문 상태를 확인(백엔드 미완성으로 MockData로 구현)
- 마이페이지 구현(백엔드 미완성으로 MockData로 구현)
```

