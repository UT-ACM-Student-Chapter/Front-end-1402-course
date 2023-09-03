import "bootstrap/dist/css/bootstrap.css";
import Square from "./components/Square";
import { useReducer, useState } from "react";

const INITIAL_STATE = {
  turn: "X", // "O"
  winner: null,
  stepNumber: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "RESET":
      return INITIAL_STATE;
    case "CHANGE_TURN":
      return {
        turn: state.turn === "X" ? "O" : "X",
        stepNumber: state.stepNumber + 1,
        winner: action.winner,
      };
    default:
      return state;
  }
};

function App() {
  const INITIAL_HISTORY = Array(9).fill(null);

  const [gameInfo, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [history, setHistory] = useState(INITIAL_HISTORY);
  function reset() {
    dispatch({ type: "RESET" });
    setHistory(INITIAL_HISTORY);
  }

  function calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        history[a] &&
        history[a] === history[b] &&
        history[a] === history[c]
      ) {
        return history[a];
      }
    }
    return null;
  }

  function setMove(id) {
    if (history[id]) {
      return;
    }
    const temp = [...history];
    temp[id] = gameInfo.turn;
    setHistory(temp);


    // ERROR
    // fix this problem and upload the answer for Question 4 in CA7
    // hint: use another hook here, maybe change the reducer, too ;)
    let winner = calculateWinner();
    dispatch({ type: "CHANGE_TURN", winner });
  }

  function renderSquare(id) {
    return <Square value={history[id]} onClick={() => setMove(id)}></Square>;
  }

  return (
    <div>
      <h1>Tic Tac Tow</h1>
      <div>
        {gameInfo.winner && <h3>Winner: {gameInfo.winner}</h3>}
        <h3>Turn: {gameInfo.turn}</h3>
        <button onClick={reset}>reset</button>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">{renderSquare(0)}</div>
          <div className="col">{renderSquare(1)}</div>
          <div className="col">{renderSquare(2)}</div>
        </div>
        <div className="row">
          <div className="col">{renderSquare(3)}</div>
          <div className="col">{renderSquare(4)}</div>
          <div className="col">{renderSquare(5)}</div>
        </div>
        <div className="row">
          <div className="col">{renderSquare(6)}</div>
          <div className="col">{renderSquare(7)}</div>
          <div className="col">{renderSquare(8)}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
