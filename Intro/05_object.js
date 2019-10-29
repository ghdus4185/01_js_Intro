const me = {
  name: 'hoyeon',
  'phone number': '010-5673-3577',
  product: {
    phone: 'iphone',
    notebook: 'mac',
  }
}

// console.log(me.name)
// console.log(me['name'])
// console.log(me.product.notebook)

// let books = ['javascript', 'python']
// let comics = {
//   DC: ['Aquama', 'SuperMan'],
//   Marvel: ['Ironman', 'Avengers'],
// }

// let bookStore = {
//   books,
//   comics
// }
// console.log(bookStore)

//JSON
console.log(me)
const jsonData = JSON.stringify(me)
console.log(jsonData)

const parseData = JSON.parse(jsonData)
console.log(parseData)