---
title: '❄️ React JSX를 알게되다.'
date: 2020-4-7 17:00:00
category: '코딩공부'
draft: false

---

- ## 라이브러리가 무엇인지?

  library는 영어로 도서관을 뜻한다. 도서관에서 우리가 필요한 책을 꺼내 쓰듯이, 이미 완성된 class나 function으로 항상 재사용할 수 있게 만든 것. 구성 데이터, 문서, 도움말 자료, 메시지 틀, 미리 작성된 코드, 서브루틴(함수), 클래스, 값, 자료형 사양을 포함할 수 있다. 

  `라이브러리란 개발에 필요한 데이터나, 재사용이 가능한 코드들을 만들어서 손쉽게 사용할 수 있도록 만들어 놓은 것입니다.`  



- ## JSX가 무엇인가?

  jsx는 javascript XML의 약자입니다. jsx는 javascript의 확장버전으로 생각하면 된다. jsx를 통해 javascript에서 마크업 코드를 작성할 수 있다.(XML :  Extensible Markup Language)

  ```jsx
  const element = <h1>Hello, world!</h1>;
   
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
  ```

  이 처럼 javascript안에서 html을 변수로 지정하고 쓰일 수 도 있다. (와 이건 보고 좀 대박이라 생각함.😮)

  - 컴포넌트는 반드시 태그 하나로 묶기
  - 조건문은 삼항 연산자로 작성하기
  - 단독 태그(br, input img)도 닫아야한다.
  - 주석은 */ 내용 */ 이렇게 쓰인다.

  `jsx란 자바스크립트의 확정버전이며, 자바스크립트와 xml을 합친것으로 볼 수 있습니다. 가장 큰 장점은 자바스크립트를 이용해서 마크업언어를 작성할 수 있어서 개발에 용이합니다.`



- ## Self-closing tag가 무엇인가?

  jsx에서는 self closing tag가 항상 가능하다. 아래처럼 단독태그 혹은 일반태그들 역시도 self closing이 가능하다.

  ```jsx
  <img src="blabla.png">
  <img src="blabla.png"/>
  
  <div></div>
  <div />
  ```

  xml에서 self-closing tag을 사용한다. Start tag는 존재하지만, end tag는 존재하지 않는 태그를 말한다. 우리가 쓰게 될 react도 jsx로 사용이 가능하므로 jsx사용 할 때에는 반드시 단독태그는 closing을 하여야만 한다.

  `셀프클로징태그는 Jsx에서 작성하는 태그들은 모두 작성과 동시에 태그를 닫을 수 있는 기능입니다. 물론 태그를 열고 닫고도 가능하지만 셀프클로징이 가능하고, 기존 html에서 닫지않아도 되는 단도태그들 예를들어 인풋이나 이미지 같은 태그들은 반드시 셀프클로징을 이용해서 닫아야합니다.`



- ## nested jsx가 무엇인가?

  Nest는 둥지, 둥지를 틀다의 뜻을 가지고 있다. nested는 아마 둥지로 틀어진의 뜻이지 아닐까 한다. jsx에서는 태그를 작성할 경우 둥지모양의 규칙을 가지고 있는 것 같다. 하나하나 예제를 봐보자.

  1. 소괄호로 감싸기(필수)

  ```jsx
  const good = (
  <div>
      <p>hi</p>
  </div>
  );
  ```

  2. 하나의 태그로 시작(필수)

  ```jsx
  const wrong = (
  <p>list1</p>
  <p>list2</p>
  );
  ```

  위와 같이 컴포넌트 안에  'list1'태그와 'list2'태그가 동등하게 들어가면 안됩니다. jsx에서는 반드시 하나의 태그로 감싸져야만 합니다. 그러므로 아래의 태그처럼 바꾸면 됩니다.

  ```jsx
  const right = (
  <div>
      <p>list1</p>
      <p>list2</p>
  </div>
  );
  ```

  `nested jsx는 컴포넌트를 작성 할 경우 소괄호로 감싸고, 또한 하나의 태그로 감싸줘야 하는 규칙을 말합니다.`



- ## rendering이 무엇인가?

  rendering은 표현이라는 뜻을 가지고 있다.

  react에서 rendering이란 html 요소, react 요소 등의 코드가 눈으로 볼 수 있도록 그려지는 것을 렌더링이라고 말한다.

  React 요소가 DOM node에 추가되어 화면에 렌더되려면 `ReactDOM.render` 함수를 사용합니다. 첫 번째 인자에는 JSX로 React 요소를 인자로 넘기고, 두 번째 인자는 해당 요소를 렌더하고 싶은 container(부모요소)를 전달합니다.

  ```jsx
  ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
  );
  ```

  - 알게 된 점

    ```jsx
    function Welcome() {
      return <h1>Hello </h1>;
    }
    
    ReactDOM.render(
      <Welcome />,
      document.getElementById('root')
    );
    ```

    위 처럼 welcome이라는 함수에 h1태그를 넣고, 리액트로 랜더를 할 때, welcome함수를 불러오는 명령어는 `<Welcome />` 혹은 `<Welcome></Welcome>` 으로 작성하게 된다.

    ```jsx
    function Welcome() {
      return 
      <div>
      	<h1>Hello </h1>
        <br />
        <h2>안녕하세요</h2>
      </div>
      ;
    }
    
    ReactDOM.render(
      <Welcome />,
      document.getElementById('root')
    );
    ```

    위 예제는 확인 차 실행해보았다. 특히 `<br>`을 그냥 적을 경우 랜더링이 되지 않고, 위와 같이 `<br />` 적거나 `<br> </br>`로 작성할 경우 정상적으로 랜더링 되는 모습을 볼 수 있다.

    `react에서 rendering이란 html 요소, react 요소 등의 코드가 눈으로 볼 수 있도록 그려지는 것을 렌더링이라고 말한다.React 요소가 DOM node에 추가되어 화면에 렌더되려면 `ReactDOM.render` 함수를 사용합니다. 첫 번째 인자에는 JSX로 React 요소를 인자로 넘기고, 두 번째 인자는 해당 요소를 렌더하고 싶은 container(부모요소)를 전달합니다. `

    ```jsx
    const element = <h1>Hello, world!</h1>;
    
    ReactDOM.render(
    element,
    document.getElementById('root')
    );
    ```



- ## Reference

  [Blog by Yeri](https://yeri-kim.github.io/posts/react-jsx/) 😄