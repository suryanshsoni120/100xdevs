import { useState } from "react";
import Header from "./Header";

const UpdatedHeader = () => {
  // Using state locally
  const [localTitle, setLocalTitle] = useState("This is local title");

  function changeTitle() {
    setLocalTitle("Local Title updated " + Math.random());
  }

  return (
    <>
      <button onClick={changeTitle}>Change Local Title</button>
      {/*  The single component that has state changing. */}
      <Header title={localTitle} />
    </>
  );
};

export default UpdatedHeader;
