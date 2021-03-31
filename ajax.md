```js

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() { // 요청에 대한 콜백
  if (xhr.readyState === xhr.DONE) { // 요청이 완료되면
    if (xhr.status === 200 || xhr.status === 201) {
      console.log(xhr.responseText);
    } else {
      console.error(xhr.responseText);
    }
  }
};
xhr.open('GET', 'https://www.zerocho.com/api/get'); // 메소드와 주소 설정
xhr.send(); // 요청 전송 
// xhr.abort(); // 전송된 요청 취소

```