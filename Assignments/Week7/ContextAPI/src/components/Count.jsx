import Buttons from "./Buttons";
import CountRenderer from "./CountRenderer";

const Count = ({ count, setCount }) => {
  return (
    <div>
      {/* Without Context API */}
      {/* <CountRenderer count={count} />
      <Buttons count={count} setCount={setCount} /> */}

      {/* With Context API */}
      <CountRenderer />
      <Buttons setCount={setCount} />
    </div>
  );
};

export default Count;
