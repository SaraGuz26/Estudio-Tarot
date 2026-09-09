import { useState } from "react";
import { spreads } from "../../data/spreads";
import { sources } from "../../data/sources";

export default function Spreads() {
  const [selectedSpreadId, setSelectedSpreadId] =
    useState<string | null>(null);

  const selectedSpread = spreads.find(
    (spread) => spread.id === selectedSpreadId
  );

  const getSource = (sourceId: string) =>
    sources.find((source) => source.id === sourceId);

  return (
    <section className="spreads-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">TAROT</p>

          <h2>Tiradas</h2>

          <p>
            Explorá estructuras de tiradas documentadas.
          </p>
        </div>
      </div>

      <div className="spread-list">
        {spreads.map((spread) => (
          <article
            key={spread.id}
            className="spread-card"
            onClick={() => setSelectedSpreadId(spread.id)}
          >
            <div className="spread-card-header">
              <div>
                <h3>{spread.name}</h3>

                <span>
                  {spread.cardCount}{" "}
                  {spread.cardCount === 1
                    ? "carta"
                    : "cartas"}
                </span>
              </div>

              <span className="spread-status">
                {spread.status === "documented"
                  ? "Documentada"
                  : spread.status === "modern-variant"
                  ? "Variante moderna"
                  : spread.status === "custom"
                  ? "Personalizada"
                  : "Sin verificar"}
              </span>
            </div>

            <div
              className={`spread-layout spread-layout--${spread.layout}`}
            >
              {spread.positions.map((position) => (
                <div
                  key={position.number}
                  className={`spread-slot spread-slot-${position.number}`}
                >
                  <span>{position.number}</span>
                </div>
              ))}
            </div>

            <p className="spread-description">
              {spread.description}
            </p>

            <div className="spread-source">
              {spread.sourceIds.map((sourceId) => {
                const source = getSource(sourceId);

                if (!source) return null;

                return (
                  <span key={source.id}>
                    Fuente:{" "}
                    {source.author
                      ? `${source.author} — ${source.title}`
                      : source.title}
                  </span>
                );
              })}
            </div>

            <div className="spread-click-hint">
              Ver tirada →
            </div>
          </article>
        ))}
      </div>

      {/* =================================================
          MODAL DE TIRADA
      ================================================= */}

      {selectedSpread && (
        <div
          className="spread-modal-overlay"
          onClick={() => setSelectedSpreadId(null)}
        >
          <div
            className="spread-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="spread-modal-close"
              onClick={() => setSelectedSpreadId(null)}
              aria-label="Cerrar"
            >
              ×
            </button>

            <div className="spread-modal-header">
              <div>
                <p className="eyebrow">
                  TIRADA DOCUMENTADA
                </p>

                <h2>{selectedSpread.name}</h2>

                <span className="spread-modal-count">
                  {selectedSpread.cardCount}{" "}
                  {selectedSpread.cardCount === 1
                    ? "carta"
                    : "cartas"}
                </span>
              </div>

              <span className="spread-status">
                {selectedSpread.status === "documented"
                  ? "Documentada"
                  : selectedSpread.status}
              </span>
            </div>

            <p className="spread-modal-description">
              {selectedSpread.description}
            </p>

            <div className="spread-modal-layout">
              <div
                className={`spread-layout spread-layout--${selectedSpread.layout}`}
              >
                {selectedSpread.positions.map(
                  (position) => (
                    <div
                      key={position.number}
                      className={`spread-slot spread-slot-${position.number}`}
                    >
                      <span>{position.number}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="spread-modal-positions">
              <h3>Posiciones</h3>

              <div className="spread-position-list">
                {selectedSpread.positions.map(
                  (position) => (
                    <article
                      className="spread-position"
                      key={position.number}
                    >
                      <div className="spread-position-number">
                        {position.number}
                      </div>

                      <div className="spread-position-content">
                        <h4>{position.name}</h4>

                        <p>
                          {position.description}
                        </p>
                      </div>
                    </article>
                  )
                )}
              </div>
            </div>

            <div className="spread-detail-source">
              <h3>Fuente</h3>

              {selectedSpread.sourceIds.map(
                (sourceId) => {
                  const source = getSource(sourceId);

                  if (!source) return null;

                  return (
                    <div
                      className="source-item"
                      key={source.id}
                    >
                      <strong>
                        {source.title}
                      </strong>

                      {source.author && (
                        <span>
                          {source.author}
                          {source.year
                            ? ` · ${source.year}`
                            : ""}
                        </span>
                      )}
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}