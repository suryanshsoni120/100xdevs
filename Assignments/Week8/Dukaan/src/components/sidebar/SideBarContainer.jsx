import { StoreInfo } from "./StoreInfo";
import { SidebarCards } from "./SidebarCards";
import { List } from "../constants/Lists";
import { CreditBox } from "./CreditBox";

export const SideBarContainer = () => {
  return (
    <div className="bg-blue-720 h-screen flex flex-col min-w-72 max-w-72">
      <div>
        <StoreInfo title={"Nishyan"} svg={"/nishyan.svg"} />
      </div>

      <div>
        {List.map((list) => {
          return (
            <div key={list.id}>
              <SidebarCards title={list.title} svg={list.svg} />
            </div>
          );
        })}
      </div>

      <div>
        {" "}
        <CreditBox credit={224.1} />
      </div>
    </div>
  );
};
