// export const addTodoAction = {
//   type: "todoList/addTodo",
//   payload: { id: 4, name: "reyo ", priority: "Low", completed: false },
// };

//action creators là 1 function

export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};
export const searchFilterChange = (text) => {
  return {
    type: "filters/searchFilterChange",
    payload: text,
  };
};

export const changeMenuToggle = (data) => {
  return {
    type: "changeMenu/changeMenuToggle",
    payload: data,
  };
};

export const statusFilterChange = (status)=>{
   return {
      type: "filters/statusFilterChange",
      payload: status,
   }
}