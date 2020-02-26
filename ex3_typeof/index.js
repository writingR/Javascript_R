// ES5로 작성
// 이후 ES6로 리팩토링

var num = 3356;
var str = 'hello';
var bool = true;
var arr = [1,2,3];
var obj = { name:'john' }

function  typeCheck(typeName) {
  var typeCheck = typeof(typeName)
  return typeCheck;
}

// 매개변수에 값을 넣어 body태그로 type 출력해보기
document.body.innerHTML = typeCheck(arr);

// str 클래스안에 str변수 type 출력해보기
var strType = document.querySelector('.str');
strType.innerHTML = typeCheck(str);
