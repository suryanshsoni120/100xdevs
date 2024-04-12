import { TransactionCards } from "./TransactionCards";
import { TransactionContainer } from "./TransactionContainer";
import { MockTransactions } from "../constants/MockTransactions";
export const TransactionOverview = () => {
  return (
    <div>
      <div>
        <TransactionContainer />
      </div>
      <div className="grid grid-cols-5 p-3 mx-3 bg-[#f2f2f2] rounded-md">
        <div className=" col-span-1 text-lg text-[#4d4d4d]">Order ID</div>
        <div className=" col-span-1 text-lg text-[#4d4d4d]">Status</div>
        <div className=" col-span-1 text-lg text-[#4d4d4d]">Transaction ID</div>
        <div className=" col-span-1 text-lg text-[#4d4d4d]">Refund Date</div>
        <div className=" col-span-1 text-lg text-[#4d4d4d] ml-auto">
          {" "}
          Order Amount
        </div>
      </div>

      <div>
        {MockTransactions.map((trs) => {
          return (
            <div key={trs.id}>
              <TransactionCards
                orderId={trs.orderId}
                status={trs.status}
                transactionId={trs.transactionId}
                refund={trs.refund}
                orderAmount={trs.orderAmount}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
