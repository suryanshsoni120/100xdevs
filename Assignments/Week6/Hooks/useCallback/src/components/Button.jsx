import { memo } from "react";

const Button = memo(({ buttonClick }) => {
  console.log("new render");

  return (
    <div>
      <button onClick={buttonClick}>Click Me</button>
    </div>
  );
});

export default Button;
