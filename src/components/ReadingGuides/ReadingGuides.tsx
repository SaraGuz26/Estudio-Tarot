import { readingGuides } from "../../data/readingGuides";

export default function ReadingGuides() {
  return (
    <section className="reading-guides">
      <div className="reading-guides__header">
        <div>
          <span className="eyebrow">GUÍA DE INTERPRETACIÓN</span>
          <h2>Cómo leer las cartas</h2>
          <p>
            Aprendé a interpretar las cartas según el contexto de la consulta,
            especialmente en temas de amor, relaciones, dinero y trabajo.
          </p>
        </div>
      </div>

      <div className="reading-guides__grid">
        {readingGuides.map((guide) => (
          <article className="reading-guide-card" key={guide.id}>
            <div className="reading-guide-card__header">
              <h3>{guide.title}</h3>
            </div>

            <p className="reading-guide-card__description">
              {guide.description}
            </p>

            <div className="reading-guide-card__sections">
              {guide.sections.map((section, index) => (
                <section
                  className="reading-guide-section"
                  key={`${guide.id}-${index}`}
                >
                  <h4>{section.title}</h4>

                  {section.content && <p>{section.content}</p>}

                  {section.items && (
                    <ul>
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}