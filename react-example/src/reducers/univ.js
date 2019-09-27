
export var univ = (state={  text:"UNIV"}, action) => 
{
  
  console.log("in univ reducer  "+JSON.stringify(state))
  switch (action.type) {
    case 'UNIV':
    var text ={
      id: action.id,
      text: action.text,
      completed: false
    } 
    
   state.text="The University of Edinburgh (abbreviated as Edin. in post-nominals), founded in 1582,[1] is the sixth oldest university in the English-speaking world and one of Scotland's ancient universities. The university has five main campuses in the city of Edinburgh, with many of the buildings in the historic Old Town belonging to the university.[5] The university played an important role in leading Edinburgh to its reputation as a chief intellectual centre during the Age of Enlightenment, and helped give the city the nickname of the Athens of the North. "
   console.log("in univ reducer post push"+JSON.stringify(state.text))
   state.rating=action.rating
    return Object.assign({},state);
    
    // state.push(y)
    
   
    default:
      return state
  }
}


