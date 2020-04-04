---
title: 🏃‍♂️TIL-200324(위코드레플잇css,js)
date: 2020-3-24 22:00:00
category: 'TIL'
draft: false
---



### Media Query

media query란 응답형 웹을 구현하는 css technique이다. 특정 조건에서는 어떤 css를 적용하라는 규칙을 줄 수 있다. css 내부에서는 `@media`라는 문법으로 작성하게 된다.

```css
@media only screen and (max-width: 480px) {  
  body {  
    font-size: 12px;  
  } 
}
```

`@media`는 media query를 작성하겠다는 명령어, `only screen` 뒤에는 조건이 붙어야 한다. 화면이 어떠한 상태일때만 작동하라는 명령어이기 때문이다. `and(max-width: 480px)`는 화면이 480px 아래에서는 폰트 사이즈를 12px로 하라는 조건을 만들어주는 명령어이다.

---

### 주석

html 주석 : `<!-- 내용 -->` or `/* 내용 */`

css 주석 : `<!-- 내용 -->` or `/* 내용 */`

javascript 주석 : `//` or `/* 내용 */`

- `//` slash 두개로 작성하는 주석은 `//`가 있는 해당 줄에만 주석이 인식되기 때문에 다음 줄에서는 js code로 인식해버리므로, `//`를 이용한 주석내용은 한줄로 이용하자. 만약 한줄이 넘어갈 때에는 `/**/`을 이용하면 되지만, 코드의 간결성과 가독성을 위해서는 간결하게 표현하는 법을 항상 생각하자!

---

### 변수

변수는 대ㆍ소문자를 구분하며, camelCase 방식으로 변수를 작성하자!

| let               | const                        |
| ----------------- | ---------------------------- |
| 변수 값 수정 가능 | 변수 값 수정 불가능(값 고정) |

---

### Math Expressions

- ### 증가연산자

  ```js
  let num = 3;
  let a = ++num;
  let b = num++;
  ```

  `a`처럼 증가연산자를 피연산자 앞에 사용하면 1을 더한 값을 반환한다.

  `b`처럼 증가연산자를 피연산자 뒤에 사용하면 1을 더하기 전 값을 반환한다.

  [산술연산자 참고자료](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators)

---

- ### 비교연산자

  |      |      |
  | ---- | ---- |
  | ===  | 일치 |
  | !==  | 부등 |
  | ==   | 동등 |
  |      |      |

- ### 논리연산자

  |      |           |
  | ---- | --------- |
  | &&   | and연산자 |
  | \|\| | or연산자  |

  ```javascript
  if (age > 65 || (age < 21 && res === "한국"));
  if ((age > 65 || age < 21) && res === "한국")
  ```

  이렇게 논리연산자를 혼용해서 조건을 조금 더 까다롭고 구체적으로 좁힐 수 도 있다.

---

- ### 데이터 받기

  ```javascript
  
  function alertSuccess(name) {   
    let name = "wecode";
    alert(name + "님 로그인 성공!"); 
  }
  
  
  // 위와 같이 함수 내부에서 인자로 받은 변수(name)에 새로운 값("wecode")을 넣으면 안 됩니다!
  // 인자(parameter)에 실제로 어떤 데이터가 전달될지는 호출할 때 결정하는 것입니다. 아래를 확인해주세요.
  
  
  alertSuccess("wecode");
  ```

  인자로 받는 것을 함수 내에서 변수로 지정해서 이용하는 것이 편리한 것 같다. 

  - ### 매개변수와 인자

  |                    |                                     |
  | ------------------ | ----------------------------------- |
  | parameter 매개변수 | 함수를 선언할때 괄호 안의 이름 값   |
  | argument 인자      | 함수를 호출할때 괄호 한의 입력한 값 |

  - ### 함수 여러인자

  ```javascript
  function meetAt(year,month,date){
    if(year && month && date){
      return year + "/" + month + "/" + date
    }
    else if(year && month){
      return year + "년" +  month + "월"
    }
    else if(year){
      return year + "년"
    }
  }
  ```

  - ### 함수 내부에서 다른 함수 호출하기

  ```javascript
  function getTax(price) {
    return price * 0.1;
  }
  
  function calculateTotal(price) {
    return price + getTax(price);
  }
  
  var result = calculateTotal(3500);
  console.log(result);
  ```

---

- ### 배열조작하기

  - index로 접근하여 수정이나 추가
  - `push`, `unshift`로 추가