
export var wishes = (state={  items:[],  wishes:[]}, action) => 
{
  console.log("in wishes reducer "+JSON.stringify(state))
  switch (action.type) {
    case 'ADD_WISH':
    var wish ={
      id: action.id,
      text: action.text,
      completed: false
    } 
    state.wishes.push(wish)
    console.log("in wishes reducer post push"+JSON.stringify(state)) 
    return Object.assign({},state);
    
    // state.push(y)
    
   
    default:
      return state
  }
}


