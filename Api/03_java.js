const check_long_str = (str) => {
  return str.length
}

if (check_long_str.length > 10){
  console.log('long string')
} else {
  console.log('short string')
}