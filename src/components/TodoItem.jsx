import React, { useState, useEffect } from "react";

const TodoItem = ({
  todoName,
  todoDate,
  iscompleted,
  CompletedTodoID,
  id,
  DeleteTodoID,
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
        <button type="button" className="Delete__Btn" onClick={deleteTodo}>
          Delete
        </button>
      </div>
    </>
  );
};
export default TodoItem;
