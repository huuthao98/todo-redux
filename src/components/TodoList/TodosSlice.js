const initState = [
  { id: 1, name: "yoga ", priority: "Low", completed: false },
  { id: 2, name: "redux ", priority: "Low", completed: false },
  { id: 4, name: "reyo ", priority: "Low", completed: true },
];

const todoListReducer = (state = initState, action) => {
  // console.log(state, action);
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default todoListReducer;
