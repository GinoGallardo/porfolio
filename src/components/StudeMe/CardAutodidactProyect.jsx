import learningPath from "../../data/study-progress.json";

function CardAutodidactProyect() {
  const autodidact = learningPath[1]?.selfTaught ?? {};

  return (
    <div className="mx-auto w-full lg:max-w-7xl px-6 flex-1 lg:py-8 overflow-hidden">
      {Object.entries(autodidact).map(([key, resource], i) => (
        <div key={i}>
          {resource.exercises?.length > 0 && (
            <div className="mx-auto w-[200em] h-[20em] lg:h-[26em] flex gap-4">
              {resource.exercises.map((exercise, index) => (
                <article
                  key={index && key}
                  className="flex stack-glow p-4 rounded-2xl bg-[#f97e3e]/10 max-w-xl flex-col items-start justify-between"
                >
                  <div className="flex flex-col items-center gap-4 text-xs">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl">
                      {exercise.name}
                    </h3>
                    <p className="text-base md:text-xl">
                      {exercise.description ?? "Sin descripción"}
                    </p>
                  </div>
                  <a
                    href={exercise.link ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Ejercicio
                  </a>
                </article>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default CardAutodidactProyect;
