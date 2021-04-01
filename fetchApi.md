```js

const url = 'https://raw.githubusercontent.com/G-yhlee/app-0/main/src/js/components/visitorchecker/data/captureData1.json'

// 기본적인 fetch api 사용법
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));

```


```js
// 포스트 방법


const url = "https://target url"
const body = { name: 'zerocho' };


fetch(url, {
  method: 'POST',
  body,
  headers: new Headers(), // 이 부분은 따로 설정하고싶은 header가 있다면 넣으세요
}).then((res) => {
  if (res.status === 200 || res.status === 201) {
    res.json().then(json => console.log(json));
  } else {
    console.error(res.statusText);
  }
}).catch(err => console.error(err));

```




```js

const url = "https://target url"
const body = { name: 'zerocho' };
const formData = new FormData();


formData.append('name', 'zero')
fetch('https://www.zerocho.com/api/post/formdata', {
  method: 'POST', // POST 메소드 지정
  body: formData, // formData를 데이터로 설정
}).then((res) => {
  if (res.status === 200 || res.status === 201) {
    res.json().then(json => console.log(json));
  } else {
    console.error(res.statusText);
  }
}).catch(err => console.error(err));

```
















```js

fetch('주소', 설정객체).then(콜백).catch(콜백);

fetch('https://www.zerocho.com/api/get').then((res) => {
  if (res.status === 200 || res.status === 201) { // 성공을 알리는 HTTP 상태 코드면
    res.text().then(text => console.log(text)); // 텍스트 출력
  } else { // 실패를 알리는 HTTP 상태 코드면
    console.error(res.statusText);
  }
}).catch(err => console.error(err));


```