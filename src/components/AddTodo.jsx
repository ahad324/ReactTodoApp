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
  const [todoEditID, settodoEditID] = useState(false);

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

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const DeleteTodo = (id) => {
    settodoList(todoList.filter((todo) => todo.id !== id));
  };

  const EditTodo = (id) => {
    const editedTodo = todoList.find((todo) => todo.id === id);

    settodoEditID(editedTodo.id);

    if (editedTodo) {
      settodoName(editedTodo.name);
      settodoDate(editedTodo.date);
    }
  };
  const UpdateTodo = () => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === todoEditID) {
        return { ...todo, name: todoName, date: todoDate };
      }
      return todo;
    });
    settodoEditID(false);
    settodoList(updatedTodoList);

    settodoName("");
    settodoDate("");
  };
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
          <span className="Todo__Inputs__Span __Tittle">
            <label htmlFor="todo">Enter Todo here</label>
            <input
              type="text"
              value={todoName}
              onChange={handletodoChange}
              className="form-control"
              id="todo"
              aria-label="Todo-input"
            />
          </span>
          <span className="Todo__Inputs__Span __Date">
            <label htmlFor="date">Enter Todo Date </label>
            <input
              type="date"
              id="date"
              value={todoDate}
              onChange={handletodoChange}
              className="form-control"
              aria-label="Todo-Date"
            />
          </span>
        </div>
        <div className="Add__Todo_Btn">
          {todoEditID ? (
            <button onClick={UpdateTodo} type="button" id="Edittodo">
              Update
            </button>
          ) : (
            <button onClick={addTodo} type="button" id="Addtodo">
              Add
            </button>
          )}
        </div>
      </div>
      {todoList.length > 0 ? (
        <TodoItems
          todoitems={todoList}
          CompletedTodo={CompletedTodo}
          DeleteTodo={DeleteTodo}
          EditTodo={EditTodo}
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
