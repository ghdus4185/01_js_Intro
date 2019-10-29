// alert("hello world!!!")
// 여기는 주석입니다.
/*
여기서부터
여기까지는
주석입니다.
*/


document.write('<h1>hello world</h1>')

// h1태그를 가져와!
// document.querySelector('h1')

// 가져온 태그 내부 text를 바꿔줘
// document.querySelector('h1').innerText = "insta"

// 변수선언
// var name = "chang"
// 프린트
// console.log(name)

// // for문 돌리는법
// var b = 30
// for (var b = 0 ; b < 10 ; b++) {
//     console.log(b)
//     // 0 1 2 ... 9
// }
// console.log("!!!!!!!!!!")
// console.log(b)

// 재할당 가능
// let name = 'chang'
// document.write(name)

// name = 'hoyeon'
// document.write(name)

// 재할당이 불가능
// const loca = 'GJ'
// document.write(loca)

// loca = 'seoul'
// document.write(loca)

// const first_name = 'hoyeon'
// const last_name = 'chang'

// const full_name = last_name + first_name

// document.write('<h1>'+full_name+'</h1>') // 문자열 출력
// document.write(`<h2>${full_name}</h2>`) // 문자열 안에 변수를 넣는법

// const userName = prompt("hello who are you?")
// let message = ''

// // if문 사용
// if (userName === 'chang') {
//     message = `<h1>admin page</h1>`
// }else if (userName === 'happy') {
//     message = `<h1>happy coding</h1>`
// }
// else {
//     message = `<h1>${userName}</h1>`
// }
// document.write(message)

const num1 = 0
const num2 = "0"
// 느슨한비교 (값을 비교)
console.log(num1 == num2)
// 엄격한 비교 (값+타입 비교)
console.log(num1 === num2)