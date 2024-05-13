import React, { useState, useEffect } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const TodoItem = ({
  todoName,
  todoDate,
  iscompleted,
  CompletedTodoID,
  id,
  DeleteTodoID,
  EditTodoID,
}) => {
  const [isChecked, setIsChecked] = useState(iscompleted);
  useEffect(() => {
    setIsChecked(iscompleted);
  }, [iscompleted]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    CompletedTodoID(id);
  };

  const deleteTodo = () => {
    DeleteTodoID(id);
  };
  const editTodo = () => {
    EditTodoID(id);
  };

  return (
    <>
      <div
        key={id}
        className={`Todo__Item__Container ${isChecked ? "completed" : ""}`}
      >
        <div className="Todo__And__CheckBox">
          <span>
            <input
              type="checkbox"
              name="completedcheckBox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </span>
          <div>
            <h5 className="todo-title">{todoName}</h5>
            <p className="todo-date">Date: {todoDate}</p>
          </div>
        </div>
        <div className="Edit__Delete__Btns">
          <button type="button" className="Edit__Btn" onClick={editTodo}>
            <FaEdit />
          </button>
          <button type="button" className="Delete__Btn" onClick={deleteTodo}>
            <MdOutlineDeleteOutline />
          </button>
        </div>
      </div>
    </>
  );
};
export default TodoItem;
