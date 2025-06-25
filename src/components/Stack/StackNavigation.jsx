import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export function StackNavigation({ onPrev, onNext }) {
  return (
    <>
      <button
        onClick={onPrev}
        className="lg:text-4xl text-[#f97e3e] bg-white/20 backdrop-blur-md rounded-full py-3 px-2 hover:bg-white/40 transition z-10"
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={onNext}
        className="lg:text-4xl text-[#f97e3e] bg-white/20 backdrop-blur-md rounded-full py-3 px-2 hover:bg-white/40 transition z-10"
      >
        <IoIosArrowForward />
      </button>
    </>
  );
}
