export var buys = (state={
    buys: [],
    todos: [],
   
}, action) => {
   
    switch (action.type) {
        case 'ADD_BUY':
            var y = {
                id: action.id,
                text: action.text,
                completed: false
            }

            state.buys.push(y)
            return Object.assign({}, state);

       
        default:

            return state

    }
}

