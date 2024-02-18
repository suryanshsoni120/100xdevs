import { useContext } from "react";
import CountContext from "../CountContext";

const CountRenderer = ({ count }) => {
  // When using Context API, access context value using useContext hook.
  const contextCount = useContext(CountContext);

  return (
    <div>
      {/* Without Context API */}
      {/* {count} */}

      {/* With Context API */}
      {contextCount}
    </div>
  );
};

export default CountRenderer;
