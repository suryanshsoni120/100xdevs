import { useContext } from "react";
import CountContext from "../CountContext";

const Buttons = ({ count, setCount }) => {
  // When using Context API, access context value using useContext hook.
  const contextCount = useContext(CountContext);

  return (
    <div>
      {/* Without Context API */}
      {/* <div className="card">
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
        <button onClick={() => setCount(count - 1)}>Decrease Count</button>
      </div> */}

      {/* With Context API */}
      <div className="card">
        <button onClick={() => setCount(contextCount + 1)}>
          Increase Count
        </button>
        <button onClick={() => setCount(contextCount - 1)}>
          Decrease Count
        </button>
      </div>
    </div>
  );
};

export default Buttons;
