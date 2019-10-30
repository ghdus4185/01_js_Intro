//call back 함수 forEach
let colors = ['red', 'green', 'blue']

// for (let color of colors) {
//   console.log(color)
// }

// colors.forEach(function(color){
//   console.log(color)
// })

// colors.forEach(function(color, idx, array){
//   console.log(color, idx, array)
// })

// colors.forEach((color) => {console.log(color)})
// colors.forEach(color => {console.log(color)})
// colors.forEach(color => console.log(color))

// function handlePosts(){
//   const posts = [
//     {id:50, title:'javascript'},
//     {id:100, title:'python'},
//     {id:123, title:'css'},
//   ]
//   for (let i = 0 ; i < posts.length ; i++) {
//     console.log(posts[i])
//     console.log(posts[i].id)
//     console.log(posts[i].title)
//   }
// }
// handlePosts()

// const posts = [
//   {id:50, title:'javascript'},
//   {id:100, title:'python'},
//   {id:123, title:'css'},
// ]
// posts.forEach(function(post){
//   console.log(post)
//   console.log(post.id)
//   console.log(post.title)
// })

// const images = [
//   {height: 10, width:20},
//   {height: 14, width:25},
//   {height: 50, width:15},
// ]
// const areas = []
// for (let image of images) {
//   areas.push(image.height*image.width)
// }
// console.log(areas)

// images.forEach(function(image){
//   areas.push(image.height*image.width)
// })
// console.log(areas)

// map() : 
// const numbers = [1, 2, 3, 4, 5]
// const doubleNumbers = []

// numbers.forEach(function(number){
//   doubleNumbers.push(number*2)
// })

// const double = numbers.map(function(number){
//   return number*2
// })
// console.log(doubleNumbers)
// const double = numbers.map(number => number*2)
// console.log(double)

// const images = [
//   {height: 10, width:20},
//   {height: 14, width:25},
//   {height: 50, width:15},
// ]

// const res = images.map(function(image){
//   return image.width*image.height
// })
// console.log(res)

// filter : 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
// const numbers = [1, 2, 3, 4, 5]
// evenNumber = numbers.filter(function(number){
//   return number % 2 === 0
// })
// console.log(evenNumber)

// const products = [
//   {name: 'cucumber', type: 'vegetable'},
//   {name: 'banana', type: 'fruit'},
//   {name: 'carrot', type: 'vegetable'},
//   {name: 'apple', type: 'fruit'},
// ]
// const res = products.filter(function(product){
//   return product.type === 'fruit'
// })
// console.log(res)

// reduce
// const scores = [100, 80, 88, 92, 95, 70]
// const total = scores.reduce((total, score)=>{
//   return total += score
// }, 0)
// console.log(total)

// const res = scores.reduce((total, score)=> total += score, 0)
// console.log(res)

// find
const users = [
  {name: "hoyeon", location: "gj"},
  {name: "oak", location: "gm"},
  {name: "dongho", location: "se"},
  {name: "seungjae", location: "se"},
  {name: "seunguang", location: "dj"},
]
// const user = users.find(function(user){
//   return user.name === 'hoyeon'
// })
// console.log(user)
const user = users.find(function(user){
  return user.location === 'se'
})
console.log(user)