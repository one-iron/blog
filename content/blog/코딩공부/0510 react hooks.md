---
title: ' 🥍 React Hooks를 알게되다.'
date: 2020-5-10 19:00:00
category: '코딩공부'
draft: false
---



1. **🥍 Hook이란?**
2. **🕵️ hook의 규칙**
3. **🚥 useState**
4. **🚏 useEffect**



# 1. 🥍 Hook이란?

어학사전에서의 Hook은 갈고리를 뜻한다. (후크선장🏴‍☠️)

리액트에서의 Hook도 이러한 갈고리의 의미와 비슷하게 사용된다. 우선, Hook은 함수형 컴포넌트에서만 사용이 가능하다. 함수형 컴포넌트에서 어디서든 Hook을 이용해 데이터를 훅훅 가져올 수 있다.

**Hook에서 가장 대표적인 함수 useState와 useEffect가 있다.**

기존에는 functional componenent에서는 상태관리를 하지 못 하였는데, React 버전 16.8버전부터 hook이라는 개념이 도입되면서 functional componenent에서도 상태를 관리할 수 있게 되었다. 찾아보니, 16.8버전은 19년 4월에서 5월 정도 즈음인것 같다. 즉 hook이 나온지 1년이 되었다.

그 이후로 class component에서도 functional componenent에서도 동등하게 state를 관리할 수 있게 되었는데 몇 가지 이유로 필자는 functional componenent이 좀 더 끌린다.



1. **함수로 쓰게되며 this의 개념이 없어짐.**
2. **상위 컴포넌트에서 하위 컴포넌트로 props를 전달 할 때 중간의 컴포넌트가 몇개인지 상관없이 2단계로 좁혀짐.(상위컴포넌트와 해당컴포넌트 이 2곳에서만 데이터 전달과정이 이루어짐)**
3. **Life cycle 함수를 좀 더 간단한 개념으로 사용할 수 있음.**



# 2. 🕵️ Hook의 규칙

### 오직 React 함수 내에서 Hook을 호출하자

 React 함수 컴포넌트에서 Hook을 호출하자. 함수 컴포넌트 안에서 만든 새로운 함수 반복문, 조건문 중첩된 함수 내에서 hook을 호출하면 안된다. 즉, 최상위 함수에서만 호출하자.

만약 hook을 조건문이나 반복문에 사용하고 싶다면, hook함수 아래에서 실행하면 된다.

```jsx
  useEffect(function persistForm() {
    // 👍 더 이상 첫 번째 규칙을 어기지 않습니다
    if (name !== '') {
      localStorage.setItem('formData', name);
    }
  });
```



### 한 컴포넌트에서 State나 Effect Hook을 여러 개 사용할 수도 있다.

```jsx
function Form() {
  // 1. name이라는 state 변수를 사용하세요.
  const [name, setName] = useState('Mary');

  // 2. Effect를 사용해 폼 데이터를 저장하세요.
  useEffect(function persistForm() {
    localStorage.setItem('formData', name);
  });

  // 3. surname이라는 state 변수를 사용하세요.
  const [surname, setSurname] = useState('Poppins');

  // 4. Effect를 사용해서 제목을 업데이트합니다.
  useEffect(function updateTitle() {
    document.title = name + ' ' + surname;
  });

  // ...
}

```







# 3. 🚥 useState

```jsx
import React, { useState } from 'react';

function Example() {
  // "count"라는 새로운 상태 값을 정의합니다.
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

```



### `const [count, setCount ] = useState(0)`

`useState(0)` useState함수를 실행하고 인자로 0을 주고 있는 것을 볼 수 있다. 이 것은 state의 초기 값이다. 함수 컴포넌트의 state는 클래스와 달리 객체일 필요는 없고, 숫자 타입과 문자 타입을 가질 수 있다. 위의 예시는 사용자가 버튼을 얼마나 많이 클릭했는지 알기를 원하므로 `0`을 해당 state의 초기 값으로 선언하였다. (2개의 다른 변수를 저장하기를 원한다면 `useState()`를 두 번 호출해야 한다.)



`const [count, setCount]`는 useState함수가 반환하는 내용이다. 첫번째인 count는 state의 변수, 두번째인 setCount는 해당 변수를 변경할 수 있는 함수이다.



### 다수의 useState 사용

```jsx
function ExampleWithManyStates() {
  // 여러 개의 state를 선언할 수 있습니다!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  
function handleOrangeClick() {
    // this.setState({ fruit: 'orange' })와 같은 효과를 냅니다.
    setFruit('orange');
}
```

