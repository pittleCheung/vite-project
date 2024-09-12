import React, { useReducer } from "react";

const initialState = {
  num: 0,
};
const reducer = (state, action) => {
  state = { ...state };
  switch (action.type) {
    case "plus":
      state.num++;
      break;
    case "minus":
      state.num--;
      break;
    default:
  }
  return state;
};

const A1 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="box">
      A1组件的详细内容
      <span>{state.num}</span>
      <button
        onClick={() => {
          dispatch({ type: "plus" });
        }}
      >
        增加
      </button>
      <button
        onClick={() => {
          dispatch({ type: "minus" });
        }}
      >
        减少
      </button>
    </div>
  );
};

export default A1;
