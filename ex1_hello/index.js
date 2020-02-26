// ES5로 작성
// 이후 ES6로 리팩토링

var helloText = 'Hello javaScript!'

//첫번째
// document.body.innerHTML = helloText;

//두번째
var bodyTag = document.querySelector('body');
bodyTag.innerHTML = helloText;