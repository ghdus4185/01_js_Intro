// let 키워드는 같은 이름의 변수를 한번만 선언가능, 할당은 여러번 가능
// let x = 1
// x = 3
// console.log(x)

// block scope 블록 유효범위
// let x = 1
// if (x===1) {
//     let x = 2
//     console.log(x)
// }
// 	console.log(x)

// let x
// const y = 9
// if (y==9) {
// 	let y = 3
// 	console.log(y)
// }
// console.log(y)

// def varTest(): 랑 똑같은거다
// var는 function level scope
// function varTest() {
// 	var x = 1
// 	if (true) {
// 		let x = 2
// 		console.log(x)
// 	}
// 	console.log(x)
// }
// varTest()
// console.log(x)

// var : 선언, 할당 => 자유 / 함수 스코프
// let : 할당 => 자유 / 선언 => 한번만 / 블록 스코프
// const : 할당, 선언 => 한번만 / 블록 스코프

// let dog
// let variableName

// let dogs = []
// function getName() {

// }

// event 처리는 앞에 on을 붙여준다.
// const onClick = () => {}

// True or False를 가지는 값 앞에는 is를 붙여준다.
// let isValid = false

// class User {
// 	constructor(value){
// 		this.name = value.name
// 	}
// }

// 다 대문자로 설정하는건 절대 안바뀌는 상수를 의미
// const API_KEY = "ASFASG:1234657"

// const a = 13
// const b = -5
// const c = 3.14
// const d = 2.9e8
// const e = Infinity
// const f = -Infinity
// const g = NaN
// console.log(Math.sqrt(-2))

// const sentence1 = 'hello\n'
// const sentence2 = 'hi'
// const sentence3 = `helloword${sentence2}`
// console.log(sentence1 + sentence3)

const isValid = true // false

let first_name
console.log(typeof first_name) // undefined

let last_name = null
console.log(typeof last_name) // null

console.log(null === undefined)
console.log(null + 1)