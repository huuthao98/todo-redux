import { Typography, Divider } from "antd";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";

import "./App.css";
import MenuApp from "./components/Menu";
const { Title } = Typography;
function App() {
  return (
   <div style={{display:'flex'}}>
     {/* <MenuApp/> */}
      <div
        style={{
          width: 500,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          padding: 20,
          boxShadow: "0 0 10px 4px #bfbfbf",
          borderRadius: 5,
          height: "90vh",
        }}
      >
       
        <Title style={{ textAlign: "center" }}>TODO APP with REDUX</Title>
        <Filters />
        <Divider />
        <TodoList />
      </div>
   </div>
  );
}

export default App;
