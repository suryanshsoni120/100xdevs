import { useRecoilValue } from "recoil";
import {
  staticTodosAtomFamily,
  dynamicTodosAtomFamily,
} from "../atoms/todosAtomFamily";

const Todo = ({ id }) => {
  const staticTodoValue = useRecoilValue(staticTodosAtomFamily(id));
  // const dynamicTodoValue = useRecoilValue(dynamicTodosAtomFamily(id));

  return (
    <>
      {/* Static data */}
      <div>
        Title : <b>{staticTodoValue.title}</b>
        <br />
        Description : <b>{staticTodoValue.description}</b>
        <br />
      </div>

      {/* Dynamic data */}
      {/* <div>
        Title : <b>{dynamicTodoValue.title}</b>
        <br />
        Description : <b>{dynamicTodoValue.description}</b>
        <br />
      </div> */}
    </>
  );
};

export default Todo;
