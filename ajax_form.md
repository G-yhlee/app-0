```js

제로초::FormData 객체 

FormData 객체
- AJAX로 이미지 업로드
- 이미지는 base64, buffer, 이진데이터 형식
- 페이지 전환 없이 데이터 전송
- 

var formData = new FormData();
formData.append('name', 'zerocho');
formData.append('item', 'orange');
formData.append('img', document.getElementById('파일 인풋').files[0])
```