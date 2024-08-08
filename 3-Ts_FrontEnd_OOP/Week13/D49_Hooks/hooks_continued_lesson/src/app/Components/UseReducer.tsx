import { useReducer } from "react";

interface State {
  count: number;
  error: string | null;
}

interface Action {
  type: "increment" | "decrement";
}

function reducer(state: State, action: Action) {
  const { type } = action;

  switch (type) {
    case "increment": {
      const newCount = state.count + 1;
      const isError = newCount > 5;
      return {
        ...state,
        count: isError ? state.count : newCount,
        error: isError ? "Maximum reached" : null,
      };
    }
    case "decrement": {
      const newCount = state.count - 1;
      const isError = newCount < 0;
      return {
        ...state,
        count: isError ? state.count : newCount,
        error: isError ? "Minimum reached" : null,
      };
    }
    default:
      return state;
  }
}

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0, error: null });
  return (
    <>
      <p>Count: {state.count}</p>
      {state.error && <p>{state.error}</p>}
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <br />
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </>
  );
}

export default UseReducer;
