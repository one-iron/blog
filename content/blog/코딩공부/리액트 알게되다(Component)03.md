---
title: '❄️ React Component를 알게되다.'
date: 2020-4-7 18:00:00
category: '코딩공부'
draft: false

---

- ## component가 무엇인지?

  component는 요소, 부품이라는 뜻을 가지고 있다. 

  컴포넌트는 재사용이 가능한 UI단위 이다. 하나의 컴포넌트에 필요한 html, css, js(validation chekc)를 모두 합쳐서 만들 수 있다. 재사용이 가능한 코드 단위라고도 할 수 있다.
  
  컴포넌트는 js 함수처럼 자주 쓰이는 기능들을 모아서 필요할 때 마다 불러 쓰는 개념이라고 생각하면 된다. 함수에서는 Input값과 return값이 존재하고, 컴포넌트에서는 props값과 return될 react요소가 존재합니다.
  
  `js에서 함수처럼 필요한 기능을 넣어두고 필요할 때 마다 사용하게 만든 것 처럼 컴포넌트에는 js,html,css까지 모두 넣어두고 필요할때 쓰는 재사용이 가능한 단위입니다.`
  
  
  
- ## component를 어떻게 만드는지? 

  - **function으로 Welcome component 만들기**

    ```jsx
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
    
    ReactDOM.render(
      <Welcome />,
      document.getElementById('root')
    );
    ```

  - **class로 Welcome component 만들기**

    ```jsx
    class Welcome extends React.Component {
      render() {
        return <h1>Hello, {this.props.name}</h1>;
      }
    }
    ```

    class로 컴포넌트를 만드려면 `class + 이름 + extends + React.Component`로 component를 생성하게 됩니다. 

    class로 컴포넌트를 만들때에는 `render()`메서드, `return`은 무조건 정의를 해야 합니다.

    component를 만들 때 필요한 메서드가 원래 더 있다는 말입니다. 그런데 그 중에서 `render()` 만 필수입니다.

    `컴포넌트를 만들 때에는 펑션으로 혹은 클래스로 만들 수 있습니다. 펑션으로 만들때에는 우리가 사용하는 방식대로 작성하면 되고 프롭스를 넣고 싶으면 함수 인자값에 넣어 주면됩니다. 함수안에서는 기존의 jsx규칙대로 네스티드 Jsx규칙대로 작성하시면 함수로 컴포넌트를 만든 것 입니다.`

    `클래스로 만들때에는 먼저 class 컴포넌트명 extends react.component로 클래스를 선언하고 아래에는 render()메서드를 무조건 정의해야하고 rentur을 정의해 주면 됩니다.`



- ## component를 어떻게 사용하는지?

  - **props가 무엇인가?**

    `props`는 속성을 나타내는 데이터입니다. component에 매개변수를 받아와서 사용하고 싶으면, `props`로 속성을 추가하고, `props.매개변수명`을 작성하여 매개변수를 가져와 사용할 수 있습니다.

    우리가 정의한 component를 사용할 때, 원하는 attribute(속성)를 parameter(매개변수)로 받아서 사용 할 수 있습니다. 이것을 `props`라고 합니다. `props`는  property의 줄임말입니다.

    `우리가 정의한 component를 사용할 때, 원하는 attribute(속성)를 parameter(매개변수)로 받아서 사용 할 수 있습니다. 이것을 `props`라고 합니다. `props`는  property의 줄임말입니다.`

    

  - **props를 어떻게 사용하는지?**

    ```jsx
    // 1. Welcome 컴포넌트 정의
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
    
    // 2. App 컴포넌트 정의
    function App() {
      return (
        <div>
          <Welcome name="Sara" />
          <Welcome name="Cahal" />
          <Welcome name="Edite" />
        </div>
      );
    }
    
    // 3. 화면에 React 요소 그려주기
    ReactDOM.render(
      <App />,
      document.getElementById('root')
    );
    ```

    

    

- ## component를 어떻게 작게 분리하는지?

  ```jsx
  function formatDate(date) {
    return date;
  }
  
  function Avatar(props) {
    return (
      <img className="avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    );
  }
  
  function UserInfo(props) {
    return (
      <div className="user-info">
        <Avatar user={props.user} />
        <div className="user-info-name">
          {props.user}
        </div>
      </div>
    );
  }
  /*
  3. 위 유저인포 함수에서는 이전에 실행한 코멘트 함수에서 1가지 프로퍼티 객체값을 가져온다.
  
  userinfo(props) = {
   user = "김개발"
  }
  
  */
  
  function Comment(props) {
    return (
      <div className="comment">
        <UserInfo user={props.author} />
        <div className="comment-text">
          {props.text}
        </div>
        <div className="comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }
  /*
  2. 위 커맨트 함수에서는 이전에 실행한 앱 함수에서 3가지 프로퍼티를 객체값으로 가져온다.
  
  commet(props)={
  	author : "김개발",
  	text : "하이요",
  	date : "2010-10-28"
  }
  
  그리고 <UserInfo user={props.author} /> 유저인포 함수를 실행하면서 프로퍼티 하나를 전달하고 있다. 유저인포에서는 어떻게 될까 다시 올라가보자.
  
  */
  function App() {
    return (
      <Comment 
        author="김개발"
        text="하이요"
        date="2019-10-28"
      />
    )
  }
  //1. 위 앱 함수에서는 코맨트 함수를 실행하면서 3가지 프로퍼티를 전달한다.
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  ```

  

- ## Reference

  [Blog by Yeri](https://yeri-kim.github.io/posts/react-jsx/) 😄