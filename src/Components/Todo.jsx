const Todo = ({ todo, toggletodo }) => {
  const handleTodoClick = () => toggletodo(todo.id);
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
        />
        {todo.name}
      </label>
    </>
  );
};

export default Todo;
