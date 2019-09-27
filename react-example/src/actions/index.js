

var wishNumber = 0
var buyNumber = 0
export var fn_AddToWish = function addToWish(text){
  console.log("in wishListGenerator")
  let myWish = {
    type: 'ADD_WISH',
    id: wishNumber++,
    text
  }
  return myWish
}

export var fn_AddToBuy = text => {
console.log("in buyGenerator")
let myBuy = {
  type: 'ADD_BUY',
  id: buyNumber++,
  text
}
return myBuy
}
