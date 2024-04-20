import { Col, Row, Input, Button, Select, Tag } from "antd";
import { v4 as uuidv4 } from "uuid";
import Todo from "../Todo";
import { addTodo, changeMenuToggle } from "../../redux/actions";

import { useDispatch, useSelector } from "react-redux";
import { genPreviewOperationsStyle } from "antd/es/image/style";
import { useState } from "react";

import { todoRemainingSelector } from "../../redux/selector";

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [hide, setHide] = useState(true);

  const [priority, setPriority] = useState("Medium");

  const todoList = useSelector(todoRemainingSelector);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );
    setTodoName("");
    setPriority("Medium");
  };

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };
  const handlePriorityChange = (value) => {
    setPriority(value);
  };
  const handleClickChange = () => {
    setHide(!hide)
    dispatch(changeMenuToggle(hide));
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Button type="primary" 
      onClick={handleClickChange}
      >
        Change
      </Button>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo key={todo.id} name={todo.name} prioriry={todo.priority} completed={todo.completed} />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
