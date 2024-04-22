import filtersReducer from "../components/Filters/filtersSlice";
import menuReducer from "../components/Menu/menuSlice";
import todoListReducer from "../components/TodoList/todosSlice";
import { combineReducers } from "redux";
// const rootReducer = (state ={}, action) => {
  // console.log(state, action);
  // switch (action.type) {
  //   case "todoList/addTodo":
  //     return {
  //       ...state,
  //       todoList: [...state.todoList, action.payload],
  //     };
  //   case "filters/searchFilterChange":
  //     return {
  //       ...state,
  //       filters: {
  //         ...state.filters,
  //         search: action.payload,
  //       },
  //     };
  //   case "changeMenu/changeMenuToggle":
  //     return {
  //       ...state,
  //       changeMenu: { ...state.changeMenu, show: action.payload },
  //     };
  //   default:
  //     return state;
  // }


  //split reducer
//   return {
//     filters:filtersReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action),
//     changeMenu: menuReducer(state.changeMenu , action)
//   }
// };

// const rootReducer = combineReducers({
//   filters:filtersReducer,
//   todoList:todoListReducer,
//   changeMenu:menuReducer
// })
// export default rootReducer;
