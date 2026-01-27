import React, { useReducer} from "react";
import type { ChangeEvent, FormEvent } from "react"

/* =======================
   Types
======================= */

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type State = {
  todos: Todo[];
  input: string;
};

type Action =
  | { type: "SET_INPUT"; payload: string }
  | { type: "ADD_TODO" }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };

/* =======================
   Initial State
======================= */

const initialState: State = {
  todos: [],
  input: "",
};

/* =======================
   Reducer Function
======================= */

function todoReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_INPUT":
      return {
        ...state,
        input: action.payload,
      };

    case "ADD_TODO":
      if (state.input.trim() === "") return state;

      return {
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: state.input,
            completed: false,
          },
        ],
        input: "",
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
}

/* =======================
   Component
======================= */

const TodoReducerExample: React.FC = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO" });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_INPUT", payload: e.target.value });
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <div className="card shadow">
        <div className="card-body">
          <h3 className="card-title mb-4 text-center">
            📝 Todo List (Using useReducer )
          </h3>

          <form onSubmit={handleSubmit} className="d-flex mb-3">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Add a new todo..."
              value={state.input}
              onChange={handleInputChange}
            />
            <button className="btn btn-primary">Add</button>
          </form>

          {state.todos.length === 0 ? (
            <p className="text-muted text-center">
              No todos yet 👀
            </p>
          ) : (
            <ul className="list-group">
              {state.todos.map((todo) => (
                <li
                  key={todo.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span
                    style={{
                      cursor: "pointer",
                      textDecoration: todo.completed
                        ? "line-through"
                        : "none",
                    }}
                    onClick={() =>
                      dispatch({
                        type: "TOGGLE_TODO",
                        payload: todo.id,
                      })
                    }
                  >
                    {todo.text}
                  </span>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() =>
                      dispatch({
                        type: "DELETE_TODO",
                        payload: todo.id,
                      })
                    }
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoReducerExample;
