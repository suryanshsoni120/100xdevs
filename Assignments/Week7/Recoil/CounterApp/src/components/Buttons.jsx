import { useSetRecoilState, useRecoilState } from "recoil";
import { countAtom } from "../atoms/countAtom";

const Buttons = () => {
  // Defining the state of the countAtom using useRecoilState hook.
  // const [count, setCount] = useRecoilState(countAtom);

  // Defining the state of the countAtom using useSetRecoilState hook.
  const setCount = useSetRecoilState(countAtom);

  return (
    <div>
      {/* Updating the value of the countAtom using the useRecoilState hook. */}
      {/* <div className="card">
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
        <button onClick={() => setCount(count - 1)}>Decrease Count</button>
      </div> */}

      {/* Updating the value of the countAtom using the useSetRecoilState hook. */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Increase Count
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrease Count
        </button>
      </div>
    </div>
  );
};

export default Buttons;
