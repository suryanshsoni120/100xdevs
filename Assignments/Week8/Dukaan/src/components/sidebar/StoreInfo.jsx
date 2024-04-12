export const StoreInfo = ({ title, svg }) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <div className="p-4">
          <img className="rounded-xl w-14 h-14" src={svg} alt="store svg" />
        </div>

        <div>
          <div className="text-white font-semibold"> {title}</div>
          <div className="text-white underline font-thin "> Visit store</div>
        </div>
      </div>
      <div className="p-4 pt-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
};
