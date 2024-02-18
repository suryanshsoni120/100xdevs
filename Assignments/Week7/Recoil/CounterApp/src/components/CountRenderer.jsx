import { useRecoilValue } from "recoil";
import { countAtom } from "../atoms/countAtom";
import { evenSelector } from "../selectors/evenSelector";

const CountRenderer = () => {
  const count = useRecoilValue(countAtom);
  const isEven = useRecoilValue(evenSelector);

  return (
    <div>
      {count}
      {/* Using normal conditional. */}
      {/* <div>{count % 2 == 0 ? "It is even" : "It is odd"}</div> */}

      {/* Using selector provided by Recoil. */}
      <div>{isEven ? "It is even" : "It is odd"}</div>
    </div>
  );
};

export default CountRenderer;
