// const initState = [
//   { id: 1, name: "yoga ", priority: "Low", completed: false },
//   { id: 2, name: "redux ", priority: "Low", completed: false },
//   { id: 4, name: "reyo ", priority: "Low", completed: true },
// ];

// const todoListReducer = (state = initState, action) => {

//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];
//     case "todoList/toggleStatusTodo":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );

//     default:
//       return state;
//   }
// };

// export default todoListReducer;
import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
  name:'todoList',
  initialState:[
  { id: 1, name: "yoga ", priority: "Low", completed: false, },
  { id: 2, name: "redux ", priority: "Low", completed: false },
  { id: 4, name: "reyo ", priority: "Low", completed: true }
  ],
  reducers:{
    addTodo:(state, action)=>{
      state.push(action.payload)
    },
    toggleStatusTodo:(state, action)=>{
      const currentTodo = state.find(todo=> todo.id === action.payload)
      currentTodo.completed = !currentTodo.completed
      console.log(currentTodo)
    },

  }
})