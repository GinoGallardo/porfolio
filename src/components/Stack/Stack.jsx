import StackItem from "./StackItem";

const Stack = () => {
  return (
    <section className="stack-glow bg-black opacity-90 max-w-7xl  mx-4 flex flex-col items-center justify-center rounded-2xl py-5 md:py-10 lg:py-20 lg:mt-30 lg:mx-auto">
      <h2 className="text-4xl text-white font-bold mb-8 lg:text-7xl">Stack</h2>
      <StackItem />
    </section>
  );
};

export default Stack;
