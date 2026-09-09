import { useState } from "react";

import { combinations } from "../../data/combinations";
import { majorArcana } from "../../data/cards/majorArcana";
import { minorArcana } from "../../data/cards/minorArcana";
import { sources } from "../../data/sources";

import type { TarotCard } from "../../types/card";

type CombinationFilter = "all" | 2 | 3 | 4 | 5;

const allCards: TarotCard[] = [
  ...majorArcana,
  ...minorArcana,
];

export default function Combinations() {
  const [filter, setFilter] =
    useState<CombinationFilter>("all");

  const getCard = (cardId: string) => {
    return allCards.find(
      (card) => card.id === cardId
    );
  };

  const getSource = (sourceId: string) => {
    return sources.find(
      (source) => source.id === sourceId
    );
  };

  const filteredCombinations =
    filter === "all"
      ? combinations
      : combinations.filter(
          (combination) =>
            combination.cardCount === filter
        );

  return (
    <section className="combinations-section">

      {/* ENCABEZADO */}

      <div className="combinations-header">
        <div>
          <p className="eyebrow">
            Biblioteca
          </p>

          <h2>
            Combinaciones de Tarot
          </h2>

          <p className="combinations-description">
            Interpretaciones documentadas de
            combinaciones entre cartas.
          </p>
        </div>

        <div className="combinations-count">
          {filteredCombinations.length}
          <span>
            {filteredCombinations.length === 1
              ? " combinación"
              : " combinaciones"}
          </span>
        </div>
      </div>


      {/* FILTROS */}

      <div className="combination-filters">

        <button
          className={
            filter === "all"
              ? "combination-filter active"
              : "combination-filter"
          }
          onClick={() => setFilter("all")}
        >
          Todas
        </button>

        <button
          className={
            filter === 2
              ? "combination-filter active"
              : "combination-filter"
          }
          onClick={() => setFilter(2)}
        >
          2 cartas
        </button>

        <button
          className={
            filter === 3
              ? "combination-filter active"
              : "combination-filter"
          }
          onClick={() => setFilter(3)}
        >
          3 cartas
        </button>

        <button
          className={
            filter === 4
              ? "combination-filter active"
              : "combination-filter"
          }
          onClick={() => setFilter(4)}
        >
          4 cartas
        </button>

        <button
          className={
            filter === 5
              ? "combination-filter active"
              : "combination-filter"
          }
          onClick={() => setFilter(5)}
        >
          5 cartas
        </button>

      </div>


      {/* LISTA */}

      {filteredCombinations.length === 0 ? (
        <div className="empty-state">
          <h3>
            Todavía no tenemos combinaciones
            de este tipo
          </h3>

          <p>
            Vamos a incorporarlas cuando
            encontremos una fuente documentada.
          </p>
        </div>
      ) : (
        <div className="combination-list">

          {filteredCombinations.map(
            (combination) => {

              const cards =
                combination.cardIds
                  .map(getCard)
                  .filter(
                    (
                      card
                    ): card is TarotCard =>
                      Boolean(card)
                  );

              return (
                <article
                  className="combination-card"
                  key={combination.id}
                >

                  {/* CABECERA */}

                  <div className="combination-card__header">

                    <span className="combination-count">
                        {combination.cardCount} cartas
                    </span>

                    <span className="combination-source-badge">
                      Documentada
                    </span>

                  </div>


                  {/* CARTAS */}

                  <div className={`combination-cards combination-cards--${combination.cardCount}`}>

                    {cards.map(
                      (card, index) => {

                        const orientation =
                          combination
                            .orientations?.[index];

                        return (
                          <div
                            className="combination-card-item"
                            key={card.id}
                          >

                            <img
                              src={card.image}
                              alt={card.name}
                            />

                            {orientation && (
                              <span
                                className={
                                  orientation ===
                                  "reversed"
                                    ? "card-orientation reversed"
                                    : "card-orientation"
                                }
                              >
                                {orientation ===
                                "reversed"
                                  ? "Invertida"
                                  : "Derecha"}
                              </span>
                            )}

                            <h3>
                              {card.name}
                            </h3>

                            {index <
                              cards.length - 1 && (
                              <span className="combination-plus">
                                +
                              </span>
                            )}

                          </div>
                        );
                      }
                    )}

                  </div>


                  {/* INTERPRETACIÓN */}

                  <div className="combination-interpretation">

                    <h4>
                      ✦ Interpretación
                    </h4>

                    <p>
                      {combination.interpretation}
                    </p>

                  </div>


                  {/* NOTA */}

                  {combination.note && (
                    <div className="combination-note">

                      <span>
                        Nota
                      </span>

                      <p>
                        {combination.note}
                      </p>

                    </div>
                  )}


                  {/* FUENTE */}

                  {combination.sourceIds.length >
                    0 && (
                    <div className="combination-source">

                      <span>
                        Fuente
                      </span>

                      {combination.sourceIds.map(
                        (sourceId) => {

                          const source =
                            getSource(sourceId);

                          if (!source) {
                            return null;
                          }

                          return (
                            <div
                              key={source.id}
                              className="combination-source__info"
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
                  )}

                </article>
              );
            }
          )}

        </div>
      )}

    </section>
  );
}