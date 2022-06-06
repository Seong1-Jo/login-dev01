# login-dev01

## Basic Login 01

### Require
  - useState, useRef
  - useRef : focus기능만 구현(처음페이지 로딩되었을때 id부분 focus, id나 password의 부분이 틀렸을때 해당 부분)
  - id는 5글자 이상 10글자 이하까지만 입력가능
  - password는 7글자 이상 가능
  - 둘다 처음에 비어있을때 로그인 버튼부분 disable처리
  - 위조건이 일치 하지 않을경우 해당부분 리셋과 해당부분의대한 경고창(alert)
  - 성공한 경우 로그인성공! 띄우기

### Step
1. JSX를 이용하여, 기본 레이아웃 만들기 (id, password, button)