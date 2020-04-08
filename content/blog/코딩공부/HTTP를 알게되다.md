---
title: '📡 HTTP를 알게되다.'
date: 2020-4-8 16:00:00
category: '코딩공부'
draft: false

---

## http란 무엇인가?

httpsms 하이퍼텍스트 문서를 교환하기 위해 만들어진 통신규약이다.

## http의 핵심 요소 2가지는 무엇인가?

1. requet와 respon가 있다. 요청과 응답이 있다. 요청과 응답이 있어야 통신이다. 

2. http stateless이다. 상태를 저장하지 않는다. 계속해서 똑같은 정보를 보내게 된다. 필요한 정보를 모두 요청에 첨부해서 보내고, 그 내용을 정보를 쿠키에 담고 이후에는 쿠키의 데이터를 요청 시 붙여서 보내게 된다.

## http는 어떤 3가지로 나누어졌는가?

1. Start line
   - http method : get(데이터 요청), post(데이터 생성), put, delete, options
   - request target : 해당 request가 전송되는 목표 rul
   - http version : http 버전에는 1.0, 1.1, 2.0
2. headers
   - 헤더스는 key : value값으로 되어있다. Host : google.com
   - 해당요청에 대한 부가정보 메타 정보
3. body
   - 실제 요청한 것에 대한 응답 데이터

## request의 3가지는 무엇인가?

1. Status line : http버전 / status code : 응답상태를 나타내는 코드 / status text : 응답 상태를 간략하게 설명해주는 부분
2. headers : 메타데이터, 부가데이터를 담고있다.
3. body : 요청 바디와 같이 내용이들어가 있다. 실제데이터

## 자주 쓰이는 http methods는 무엇인가?

- get

  로그인정보, 사용자정보를 요청할 때 자주 쓰이고, 쓰이는 범위가 넓다.

- post

  데이터에 변화가 있는 생성, 업데이트, 삭제할 때 쓰인다.

- put

  post이랑 비슷한데 자주 쓰이지 않는다. put은 무언가를 생성할때 쓰인다.

- delete

  무언가의 데이터를 삭제할 때.

## 자주 쓰이는 http status code

- 200 ok

  문제없이 다 잘 실행 되었을때 보내는 코드

- 301 moved permanently

  해당 url이 다른 주소로 바뀌었을대 보내는 코드

- 401 bad request

  하하하

- 401 unauthorized

  유저가 해당 요청을 진행 할려면 먼저 로그인을 하거나 회원가입을 하거나 등등이 필요하다는 것을 나타내려 할때 쓰이는 코드

- 403 forbidden

  유저가 해당 요청에 대한 권한이 없다는 뜻

  예를들어 과금한 유저만 볼 수 있는 데이터를 요청 했을 때

- 404 not found

  요청된 uri가 존재 하지 않는다는 뜻. 호스트는 맞지만, ???

- 500 internal server error

  서버가 요청을 잘 받았지만 서버쪽에서 에러가 났을 때 사용되는 코드

  Api 개발 하는 백앤드 개발자들이 싫어하는 코드