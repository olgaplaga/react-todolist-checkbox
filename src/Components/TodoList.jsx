import Todo from "./Todo";

const TodoList = ({ todos, toggletodo }) => {
  return todos.map((todo) => {
    return <Todo key={todo.id} todo={todo} toggletodo={toggletodo} />;
  });
};

export default TodoList;
