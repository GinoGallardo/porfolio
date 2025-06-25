import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export function NavigatePrev({ onPrev }) {
  return (
    <>
      <button
        onClick={onPrev}
        className="lg:text-4xl text-[#f97e3e] bg-white/20 backdrop-blur-md rounded-full py-3 px-2 hover:bg-white/40 transition z-10"
      >
        <IoIosArrowBack />
      </button>
    </>
  );
}

export function NavigateNext({ onNext }) {
  return (
    <>
      <button
        onClick={onNext}
        className="lg:text-4xl text-[#f97e3e] bg-white/20 backdrop-blur-md rounded-full py-3 px-2 hover:bg-white/40 transition z-10"
      >
        <IoIosArrowForward />
      </button>
    </>
  );
}
