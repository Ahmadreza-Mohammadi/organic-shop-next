export default function ArrowLeft() {
  return (
    <div className="bg-white rounded-full w-[45px] h-[45px] flex items-center justify-center shadow-2xl cursor-pointer transition-colors duration-300 hover:bg-green-500 active:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500">
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current text-black hover:text-white active:text-white"
      >
        <path
          d="M6 12H18M6 12L11 7M6 12L11 17"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
  );
}
