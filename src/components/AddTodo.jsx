import { useState, useEffect } from "react";
import TodoItems from "./TodoItems.jsx";
import { v4 as uuidv4 } from "uuid";
import Happy from "../Assets/happy.svg";

function AddTodo() {
  const id = uuidv4();

  const [todoList, settodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );
  const [todoName, settodoName] = useState("");
  const [todoDate, settodoDate] = useState("");

  const CompletedTodo = (id) => {
    settodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, iscompleted: !todo.iscompleted };
        }
        return todo;
      })
    );
  };

  const DeleteTodo = (id) => {
    settodoList(todoList.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  function addTodo() {
    if (todoName && todoDate) {
      const newTodo = [
        ...todoList,
        { name: todoName, date: todoDate, iscompleted: false, id: id },
      ];
      // console.log(newTodo);
      settodoList(newTodo);
      settodoName("");
      settodoDate("");
    }
  }
  function handletodoChange(e) {
    if (e.target.type === "text") {
      settodoName(e.target.value);
    } else {
      settodoDate(e.target.value);
    }
  }
  return (
    <>
      <div className="Add__Todo">
        <div className="Todo__Inputs">
          <input
            type="text"
            value={todoName}
            onChange={handletodoChange}
            className="form-control"
            id="todo"
            placeholder="Enter Todo here"
            aria-label="Todo-input"
          />
          <input
            type="date"
            id="date"
            value={todoDate}
            onChange={handletodoChange}
            className="form-control"
            aria-label="Todo-Date"
          />
        </div>
        <div className="Add__Todo_Btn">
          <button onClick={addTodo} type="button" id="Addtodo">
            Add
          </button>
        </div>
      </div>
      {todoList.length > 0 ? (
        <TodoItems
          todoitems={todoList}
          CompletedTodo={CompletedTodo}
          DeleteTodo={DeleteTodo}
        />
      ) : (
        <center style={{ color: "red", fontSize: "1rem" }}>
          Not Tasks Available
          <img src={Happy} style={{ width: "100%", height: "50vh" }} alt="" />
        </center>
      )}
    </>
  );
}
export default AddTodo;