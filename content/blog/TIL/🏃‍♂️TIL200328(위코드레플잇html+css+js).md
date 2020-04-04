---
title: 🏃‍♂️TIL-200328(위코드레플잇html+css+js)
date: 2020-3-28 22:00:00
category: 'TIL'
draft: false
---



### html + javascript

**외부 파일로 분리 연결**

```html
<script src="js.js"></script>
```

js를 별도의 파일로 분리할 수도 있다. 장점은 보다 엄격하게 정보와 제어를 분리할 수 있다. 하나의 js 파일을 여러 웹페이지에서 로드함으로서 js의 재활용성을 높일 수 있다. 캐쉬를 통해서 속도의 향상, 전송량의 경량화를 도모할 수 있다.



**script 방식**

```html
<body>
	<scirpt> js내용 </scirpt>    
</body>
```

script 태그를 만들어서 여기에 자바스크립트 코드를 삽입하는 방식이다. 장점은 html 태그와 js 코드를 분리할 수 있다는 점이다. 



**inline 방식**

```html
<body>
    <input type="button" onclick="alert('Hello world')" value="Hello world" />
</body>
```

inline 방식은 태그에 직접 자바스크립트를 기술하는 방식이다. 장점은 태그에 연관된 스크립트가 분명하게 드러난다는 점이다. 하지만 정보와 제어가 섞여 있기 때문에 정보로서의 가치가 떨어진다.

---

### DOM(Documnet Object Mode)

DOM을 조금 풀어서 써 볼까요? DOM은 Document Object Model의 약자입니다. Document는 문서이고 Object는 객체로 번역이 되죠. 그리고 Model은 그냥 모델로 많이 쓰죠. 문서 객체 모델로 번역을 할 수 있겠네요. 번역을 해도 아직 통 감이 오지 않네요. 

도대체 이 문서 객체란 것이 무엇일까요? 문서 객체란 `<html>`이나 `<body>` 같은 html문서의 태그들을 JavaScript가 이용할 수 있는 객체(object)로 만들면 그것을 문서 객체라고 합니다. (그럼 html문서의 태그들이 객체에 담긴 상태를 의미하는 것일까요? )

여기에 Model을 붙였는데 Model이라는 영어 단어에는 모형, 주형이라는 의미도 있고 모듈이라는 의미도 있습니다. 비슷하게 여기서는 문서 객체를 '인식하는 방식'이라고 해석할 수 있습니다.



### DOM이용 접근 방법

```javascript
document.body;

document.querySelector('.blue');
```

### DOM이용 style 수정 방법

```javascript
blueElement.style.backgroundColor = 'blue';
```

위와 같이 위치 접근후 style을 통해 바꿀 수 있지만, javascript에서는 style을 수정할 때 hypne(-)은 사용할 수 없다. 그러므로 style의 프로퍼티에 접근할 때에는 camelCase를 이용하여 접근하여 수정하면 된다.

###  DOM이용 element 생성 방법

```javascript
var node = document.createElement("LI"); // 리스트 쳐 만들고
var textnode = document.createTextNode("Water"); // 넣을 텍스트 쳐 만들고
node.appendChild(textnode); // 리스트에 텍스트 박아버리고
document.getElementById("myList").appendChild(node); // 텍스트가 담겨진 리스트를 원하는 위치에 appendChild한다!
```

단계별로 엘리멘트와 엘리멘트에 추가할 요소를 먼저 만들어 하나로 만들고 그리고 최종적으로 appendChild를 이용하여 원하는 위치에 추가한다.

### getElementsByTagName('h1')

항상 id, class값으로 요소값에 접근을 해서, getElementsByTagName은 처음 써봤는데 이해가 안가는 부분이 있었다.

```javascript
document.getElementsByTagName('h1').appendChild(createPara);
```

일반적으로 id, class값으로 접근할 때에는 위 처럼 작성하면 작동이 잘됬는데, 이상하게 tag 접근은 계속 원하는데로 되지 않았다. 그런데 아래처럼 하면 작동이 되었다.

```javascript
document.getElementsByTagName('h1')[0].appendChild(createPara);
```

문제는 풀었지만, 저기서 [0]값은 도대체 무엇을 뜻 하는지 계속 고민을 하고 id나 class값 처럼 정확히 지정해주는 것이 아니라 애매모호한 지정이라 같은 태그를 배열로 정리하고 거기서 몇번째 태그에 넣는걸 지정해주는 건가 추측하고 실험해보니 맞았다.(class나 id도 한가지가 아닐 경우에는 인덱스를 붙인다.)

tagname 으로 접근할 때에는 꼭 인덱스 값을 지정해주어야지 접근이 가능하다.

---

### event

 

```
getelementsbyclassname();
queryselector
```

