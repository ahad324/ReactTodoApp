import TodoItem from "./TodoItem.jsx";

const TodoItems = ({ todoitems, CompletedTodo, DeleteTodo, EditTodo }) => {
  const CompletedTodoID = (id) => {
    CompletedTodo(id);
  };
  const DeleteTodoID = (id) => {
    DeleteTodo(id);
  };
  const EditTodoID = (id) => {
    EditTodo(id);
  };
  return (
    <>
      <div className="Todo__Items">
        {todoitems.map((todo) => (
          <TodoItem
            key={todo.id}
            todoName={todo.name}
            todoDate={todo.date}
            iscompleted={todo.iscompleted}
            CompletedTodoID={CompletedTodoID}
            DeleteTodoID={DeleteTodoID}
            EditTodoID={EditTodoID}
            id={todo.id}
          />
        ))}
      </div>
    </>
  );
};
export default TodoItems;
