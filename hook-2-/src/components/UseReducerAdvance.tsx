import React, { useReducer } from "react";
interface Todo {
  id: number;
  name: string;
  status: boolean;
}
export default function UseReducerAdvance() {
  // thực hành todolist bằng reducer
  //  khai báo state trc
  const initial = {
    todos: [],
    isLoanding: false,
    todo: {
      id: 0,
      name: "",
      status: false,
    },
  };
  // khởi tạo action
  const action = (type: any, payload: any): any => {
    return { type, payload };
  };
  const reducer = (state: any = initial, action: any) => {
    switch (action.type) {
      case "CHANGE_INPUT":
        console.log("1111", action);
        return {
          ...state,
          todo: {
            ...state.todo,
            name: action.payload,
          },
        };
      case "ADD_TODO":
        // state.todos.push(action.payload);
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              ...action.payload,
              id: Math.floor(
                Math.random() * 999999 + new Date().getMilliseconds()
              ),
            },
          ],
        };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initial);
  // lấy giá trị ô input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    dispatch(action("CHANGE_INPUT", inputValue));
  };
  const addTodo = () => {
    dispatch(action("ADD_TODO", state.todo));
  };
  return (
    <div>
      UseReducerAdvance
      {/* 

        */}
      <input type="text" onChange={handleChange} />
      <button onClick={addTodo}>thêm công việc</button>
      <p>danh sách công việc </p>
      {state.todos.map((item: Todo, index: number) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </div>
  );
}
