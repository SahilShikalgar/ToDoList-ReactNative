const initialState = {
    ToDoList: [
      "Learn React",
      "Learn React Native",
      "Learn Angular",
      "Learn Vue JS",
      "Learn Dart",
      "Learn Flutter",
      "Learn Laravel",
      "Learn Go",
      "Learn Spring Boot",
      "Learn Node JS"
    ]
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LIST_ITEM':
      return { ...state, ToDoList: [...state.ToDoList, action.payload] }
    case 'GET_LIST_ITEMS':
      return { ...state.ToDoList }
    default:
      return state;
  }
}

export default appReducer;
