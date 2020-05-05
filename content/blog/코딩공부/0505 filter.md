---
title: '💦 Filter Method를 알게되다.'
date: 2020-5-5 23:00:00
category: '코딩공부'
draft: false
---

 



# MDN에서의 Filter Method

### MDN 제목 : `Array.prototype.filter()`

Filter 함수 앞에는 배열만 올 수 있다. filter메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.



### MDN 구문 : `arr.filter(callback(element[, index[, array]])[, thisArg])`

callback : filter는 callback함수로 첫번째 인자로 함수를 받는다. 이 함수는 안에서 직접 만들어도 되고, 만든 함수를 넣어도 된다.

currentValue : 처리할 현재 요소

index (optional) : 처리할 현재 요소의 인덱스

Array (optional) : map()을 호출한 배열

thisArg(optional) : callback을 실행할 때 this로 사용되는 값



# Filter Method 예제

### 몬스터 카드

this.state.monsters라는 몬스터 데이터가 전체가 담긴 배을 filter함수를 이용하여 사용자가 타이핑한 텍스트 값을 includes안에 넣어주는 코드이다.

```jsx
    const searchMonster = this.state.monsters.filter( monster => {
      return monster.name.toLowerCase().includes(this.state.userInput.toLowerCase())
    })
```



### MDN 예제

```jsx
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

```



# Map Method에 대한 정리

filter는 이름과 같이 받은 배열에 대해 요소를 걸러내어 true/false를 반환하고, 없으면 빈 배열을 반환한다. 이것 또한, map과 같이 callback함수를 무조건 받게 된다.

