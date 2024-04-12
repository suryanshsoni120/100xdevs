export const TransactionCards = ({
  orderId,
  status,
  transactionId,
  refund,
  orderAmount,
}) => {
  return (
    <div>
      <div className="grid grid-cols-5 p-2">
        <div className=" col-span-1 text-lg text-blue-700">{orderId}</div>
        <div className="flex items-center">
          <span
            className={` mr-2  w-[12px] h-[12px] rounded-full 
             ${status ? "bg-green-500" : "bg-[#999999]"}`}
          ></span>

          <div className=" col-span-1 text-lg text-[#4d4d4d]">
            {status ? "Successful" : "Processing"}
          </div>
        </div>

        <div className="col-span-1 text-lg text-[#4d4d4d]">{transactionId}</div>
        <div className="col-span-1 text-lg text-[#4d4d4d]"> {refund}</div>
        <div className="col-span-1 text-lg text-[#4d4d4d] ml-auto">
          ₹ {orderAmount}
        </div>
      </div>
      <hr />
    </div>
  );
};
