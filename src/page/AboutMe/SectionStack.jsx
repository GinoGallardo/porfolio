import StackItemByType from "../../components/Stack/StackItemType";

function SectionStack() {
  return (
    <section className="w-full">
      <h3 className="text-3xl md:text-4xl lg:text-[1.8em] xl:text-[4rem] font-bold font-[crimson] tracking-wide text-white">
        Tecnologías que manejo
      </h3>
      <div className="flex items-center justify-center gap-4 text-lg">
        <StackItemByType />
      </div>
    </section>
  );
}

export default SectionStack;
