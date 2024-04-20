const initState = {
      show: false,
  };
  
  const menuReducer = (state = initState, action) => {
    // console.log(state, action);
    switch (action.type) {
 
      case "changeMenu/changeMenuToggle":
        return {
          ...state,
         show: action.payload ,
        };
      default:
        return state;
    }
  };
  
  export default menuReducer;
  