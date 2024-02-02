import { useState, memo } from "react";

const MemoHeader = () => {
  // Using state locally
  const [memoTitle, setMemoTitle] = useState("This is memo title");

  function changeTitle() {
    setMemoTitle("Memo Title updated " + Math.random());
  }

  return (
    <>
      <button onClick={changeTitle}>Change Memo Title</button>
      {/*  The single component that has state changing. */}
      <MemoItem title={memoTitle} />
    </>
  );
};

// If the title prop doesen't changes, the component will not re-render.
// This is the memoized version of the component by wrapping it inside memo function.
// The memoized component will re-render only if the props passed to it have changed.
// If the props remain the same, the memoized component will reuse the previously rendered result
const MemoItem = memo(function MemoItem({ title }) {
  return <div>{title}</div>;
});

export default MemoHeader;
