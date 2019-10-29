// 함수 선언식
// function add(num1, num2) {
//   return num1 + num2
// }
// console.log(add(2, 10))

// 함수 표현식
// const sub = function(num1, num2) {
//   return num1 - num2
// }
// console.log(sub(10,2))

// 함수 표현식
// const ssafy1 = function(name) {
//   console.log(`hello ${name}`)
// }
// ssafy1('chang')

// 화살표 함수, arrow function
// const ssafy2 = (name) => {
//   console.log(`hello ${name}`)
// }
// ssafy2('hoyeon')

// 화살표 함수 소괄호 생략, 단 매개변수가 하나일 때
// const ssafy3 = name => {
//   console.log(`hello ${name}`)
// }
// ssafy3('hoyeon')

// 화살표 함수 중괄호 생략, 표현식 하나일때
// const ssafy4 = name => `hello ${name}`
// console.log(ssafy4('hoyeon'))

// let square = function(num) {
//   return num ** 2
// }
// console.log(square(3))

// let square1 = (num) => {
//   return num**2
// }
// console.log(square1(4))

// let square2 = num => num**2
// console.log(square2(5))

// square = num => num ** 2

// let noArgs = () => 'no args'
// noArgs = _ => 'no args'
// console.log(noArgs())

// const a = {}
// console.log(typeof a)
// // 오브젝트를 만나면 소괄호나 중괄호로 닫음
// let returnObject = () => ({key: 'value'})

// 기명함수
// const hello = (name="no name") => `hello ${name}`
// console.log(hello())

// 익명함수
// (function (name) {
//   console.log(name)
// })('chang')