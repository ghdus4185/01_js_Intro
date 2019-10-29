// 분기처리랑 반복문 작성
// const readline = require('readline')
// const userName = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
// })

// userName.question('이름을 입력하세요', (answer) => {
//     console.log(answer)
//     userName.close()
// })

// const userName = prompt('who are you?')
// let message = ''
// if (userName === 'change') {
//     message = 'hi admin'
// } else if (userName === 'happy') {
//     message = 'happy coding'
// } else {
//     message = `hello ${userName}`
// }
// console.log(message)

// const userName = prompt('who are you?')
// let message = ''
// switch (userName) {
//     case 'admin': {
//         message = 'admin~~~~~~~~'
//         break
//     }
//     case 'change': {
//         message = 'welcome'
//         break
//     }
//     default: {
//         message = `hi ${userName}`
//     }
// }
// console.log(message)

// let i = 0
// while (i < 5) {
//     console.log(i)
//     i++
// }

// for ( 초기화 ; 값 비교 ; 값증가) {
//     실행시킬코드
// }

// for (let a = 0 ; a < 8 ; a++) {
//     console.log(a)
// }
const numbers = [0, 1, 2, 3, 4, 5]
for (let num of numbers) {
    console.log(num)
}