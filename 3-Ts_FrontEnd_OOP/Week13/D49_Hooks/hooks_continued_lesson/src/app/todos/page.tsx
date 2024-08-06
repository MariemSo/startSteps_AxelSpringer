import { useReducer } from "react";

const initalTodos = [
  { id: 1, title: "Todo1", completed: false },
  { id: 2, title: "Todo2", completed: false },
];
const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: true };
        } else {
          return todo;
        }
      });
    case "UNCOMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: false };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};
export default function Todos() {
  const [todos, dispatch] = useReducer(reducer, initalTodos);

  const handleChange = (todo) => {};
  dispatch({ type: "COMPLETE", id: todo.id });
  return (
    <>
      {todos.map((todo) => {
        <div>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleChange}
          />
          {todo.title}
        </div>;
      })}
    </>
  );
}
