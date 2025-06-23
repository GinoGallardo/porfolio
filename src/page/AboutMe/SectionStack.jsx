import StackItemByType from "../../components/Stack/StackItemType";

function SectionStack() {
  return (
    <section className="w-full p-4">
      <h3 className="text-5xl text-[#f97e3e] font-semibold mb-4">
        Tecnologías que manejo
      </h3>
      <div className="flex items-center justify-center p-4 gap-4 text-lg">
        <StackItemByType />
      </div>
    </section>
  );
}

export default SectionStack;
