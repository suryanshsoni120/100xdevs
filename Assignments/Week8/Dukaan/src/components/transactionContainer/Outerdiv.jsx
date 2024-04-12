import { NextPayoutCard } from "../NextPayoutCard";
import { RevenueCard } from "../RevenueCard";
import { TransactionOverview } from "./TransactionOverview";
export const Outerdiv = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center p-3 px-8">
          <span className="text-xl font-semibold"> Overview</span>

          <div className="flex items-center border border-gray-300 rounded px-4 py-1.5">
            <span className="pr-1 text-xl text-[#4D4D4D]">This Month</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="p-5 col-span-2 lg:col-span-1">
            <NextPayoutCard
              title={"Next Payout"}
              amount={"2312.23"}
              orderCount={"23"}
              date={"Today , 4:00 PM"}
            />
          </div>
          <div className="p-5 col-span-2 lg:col-span-1">
            <RevenueCard
              title={"Amount Pending"}
              amount={"92,312.20"}
              orderCount={"13"}
            />
          </div>
          <div className="p-5 col-span-2 lg:col-span-1">
            <RevenueCard title={"Amount Processed"} amount={"23,92,312.19"} />
          </div>
        </div>

        <div className="px-5">
          <span className="font-semibold text-2xl">
            Transactions | This Month
          </span>
        </div>

        <div className="p-3 m-3">
          <button className="bg-[#E6E6E6] text-[#808080] rounded-3xl p-3 px-5 mr-3 text-xl">
            Payouts (22){" "}
          </button>
          <button className="bg-[#146EB4] text-white p-3 rounded-3xl px-5 ml-3 text-xl">
            {" "}
            Refunds (6){" "}
          </button>
        </div>

        <div className=" m-8  shadow-xl min-w-max  bg-white">
          <TransactionOverview />
        </div>
      </div>
    </div>
  );
};

//className="bg-[#d4d4d4]"
