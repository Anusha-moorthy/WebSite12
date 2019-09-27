import { connect } from 'react-redux'
import WishListViewComponent from '../components/WishList'
import BuyListViewComponent from '../components/BuyList'



const mapStateToProps_wishes = function mapper(state)  {
  console.log("in mapStateToProps_wishes " + JSON.stringify(state.wishes))
  let wishes = {
    wishes:[...state.wishes.wishes]
  }
  return wishes;
}
const mapStateToProps_buys = function mapper(state) {
  console.log("in mapStateToProps_buys " + JSON.stringify(state))
  let buyList = {
    buys: [...state.buys.buys]
  }
  return buyList;
}
var fn_loadDataFromStore  =  connect(mapStateToProps_wishes)
var res_collected_wishes = fn_loadDataFromStore(WishListViewComponent)
export var WishList = res_collected_wishes

// export var V = connect(
//   mapStateToProps,

// )(TodoList)
 fn_loadDataFromStore  =  connect(mapStateToProps_buys)
var res_collected_wishes = fn_loadDataFromStore(BuyListViewComponent)
export var BuyList = res_collected_wishes




