const initialState = {
    ToDoList: []
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LIST_ITEM':
      console.log("Your choice is ADD_LIST_ITEM!")
      return [...state, { ToDoList: [...state.ToDoList, action.payload] }]
    default:
      return state;
  }
}

export default appReducer;
