import { useState } from "react";

import { majorArcana } from "./data/cards/majorArcana";
import { minorArcana } from "./data/cards/minorArcana";

import { TarotCard } from "./components/TarotCard/TarotCard";
import Combinations from "./components/Combinations/Combinations";
import Spreads from "./components/Spreads/Spreads";
import ReadingGuides from "./components/ReadingGuides/ReadingGuides";

import { getLizDeanYesNo } from "./data/cards/yesNo";
import { sources } from "./data/sources";

import type { TarotCard as TarotCardData } from "./types/card";

type CardFilter =
  | "all"
  | "major"
  | "cups"
  | "wands"
  | "swords"
  | "pentacles";

export default function App() {
  const [selectedCard, setSelectedCard] =
    useState<TarotCardData | null>(null);

  const [activeTab, setActiveTab] =
    useState<"cards" | "combinations" | "spreads" | "reading-guides">("cards");

  const [filter, setFilter] =
    useState<CardFilter>("all");

  const handleSelectCard = (card: TarotCardData) => {
    setSelectedCard(card);
  };

  const handleCloseCard = () => {
    setSelectedCard(null);
  };

  const renderCards = (cards: TarotCardData[]) => {
    return cards.map((card) =>
      selectedCard?.id === card.id ? (
        <article
          key={card.id}
          className="tarot-card card-selected"
        >
          <button
            className="card-detail__close"
            onClick={handleCloseCard}
            aria-label="Cerrar carta"
          >
            ×
          </button>

          <div className="card-selected__layout">
            <div
              className="tarot-card__image"
              onClick={handleCloseCard}
              role="button"
              tabIndex={0}
              aria-label={`Cerrar ${card.name}`}
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" ||
                  event.key === " "
                ) {
                  handleCloseCard();
                }
              }}
            >
              <img
                src={card.image}
                alt={card.name}
              />
            </div>

            <div className="card-detail__content">
              <span className="card-detail__number">
                {card.arcana === "major"
                  ? `ARCANO ${card.number}`
                  : "ARCANO MENOR"}
              </span>

              <h3>{card.name}</h3>

              <section className="card-detail__answer">
                <h4>Sí / No</h4>

                <div
                  className={`card-detail__answer-badge answer-${getLizDeanYesNo(card).answer}`}
                >
                  {getLizDeanYesNo(card).answer === "yes"
                    ? "Sí"
                    : getLizDeanYesNo(card).answer === "no"
                    ? "No"
                    : "Neutral"}
                </div>

                <p className="card-detail__method">
                  Método de Liz Dean
                </p>

                {getLizDeanYesNo(card).note && (
                  <p className="card-detail__answer-note">
                    {getLizDeanYesNo(card).note}
                  </p>
                )}
              </section>

              <section>
                <h4>Significado general</h4>
                <p>{card.upright.meaning}</p>
              </section>

              <section>
                <h4>Palabras clave</h4>

                <div className="card-detail__keywords">
                  {card.upright.keywords.map(
                    (keyword) => (
                      <span key={keyword}>
                        {keyword}
                      </span>
                    )
                  )}
                </div>
              </section>

              <section>
                <h4>Invertida</h4>
                <p>{card.reversed.meaning}</p>
              </section>

              <section>
                <h4>Simbolismo</h4>
                <p>{card.symbolism}</p>
              </section>

              {card.contextual && (
                <section>
                  <h4>Según el contexto</h4>

                  <div className="card-detail__contexts">
                    {card.contextual.home && (
                      <div>
                        <strong>Hogar</strong>
                        <p>{card.contextual.home}</p>
                      </div>
                    )}

                    {card.contextual.love && (
                      <div>
                        <strong>Amor y relaciones</strong>
                        <p>{card.contextual.love}</p>
                      </div>
                    )}

                    {card.contextual.careerMoney && (
                      <div>
                        <strong>Trabajo y dinero</strong>
                        <p>{card.contextual.careerMoney}</p>
                      </div>
                    )}

                    {card.contextual.spiritual && (
                      <div>
                        <strong>Espiritual</strong>
                        <p>{card.contextual.spiritual}</p>
                      </div>
                    )}
                  </div>
                </section>
              )}

              <section className="card-detail__source">
                <h4>Fuente</h4>

                {card.sourceIds.map((sourceId) => {
                  const source = sources.find(
                    (item) => item.id === sourceId
                  );

                  if (!source) {
                    return null;
                  }

                  return (
                    <div key={source.id}>
                      <p className="card-detail__source-title">
                        {source.title}
                      </p>

                      {source.author && (
                        <p className="card-detail__source-author">
                          {source.author}
                          {source.year
                            ? ` · ${source.year}`
                            : ""}
                        </p>
                      )}
                    </div>
                  );
                })}
              </section>
            </div>
          </div>
        </article>
      ) : (
        <TarotCard
          key={card.id}
          card={card}
          onSelect={handleSelectCard}
        />
      )
    );
  };

  const getFilteredCards = (): TarotCardData[] => {
    switch (filter) {
      case "major":
        return majorArcana;

      case "cups":
        return minorArcana.filter(
          (card) => card.suit === "cups"
        );

      case "wands":
        return minorArcana.filter(
          (card) => card.suit === "wands"
        );

      case "swords":
        return minorArcana.filter(
          (card) => card.suit === "swords"
        );

      case "pentacles":
        return minorArcana.filter(
          (card) => card.suit === "pentacles"
        );

      default:
        return [...majorArcana, ...minorArcana];
    }
  };

  const filteredCards = getFilteredCards();

  return (
    <main className="app">

      {/* ENCABEZADO */}

      <header className="hero">
        <p className="eyebrow">
          Estudio del Tarot
        </p>

        <h1>
          Biblioteca del Tarot
        </h1>

        <p>
          Base inicial para cartas, tiradas,
          combinaciones y fuentes.
        </p>
      </header>


      {/* PESTAÑAS PRINCIPALES */}

      <div className="main-tabs">
        <button
          className={
            activeTab === "cards"
              ? "main-tab active"
              : "main-tab"
          }
          onClick={() => {
            setActiveTab("cards");
            setSelectedCard(null);
          }}
        >
          Cartas
        </button>

        <button
          className={
            activeTab === "combinations"
              ? "main-tab active"
              : "main-tab"
          }
          onClick={() => {
            setActiveTab("combinations");
            setSelectedCard(null);
          }}
        >
          Combinaciones
        </button>

        <button
        className={
          activeTab === "spreads"
            ? "main-tab active"
            : "main-tab"
        }
        onClick={() => {
          setActiveTab("spreads");
          setSelectedCard(null);
        }}
      >
        Tiradas
      </button>

      <button
        className={`main-tab ${
          activeTab === "reading-guides" ? "active" : ""
        }`}
        onClick={() => setActiveTab("reading-guides")}
      >
        Cómo leer
      </button>
      </div>

      


      {/* CONTENIDO DE CARTAS */}

      {activeTab === "cards" && (
        <>
          {/* FILTROS */}

          <section className="card-filters">
            <button
              className={
                filter === "all"
                  ? "card-filter active"
                  : "card-filter"
              }
              onClick={() => {
                setFilter("all");
                setSelectedCard(null);
              }}
            >
              Todas
            </button>

            <button
              className={
                filter === "major"
                  ? "card-filter active"
                  : "card-filter"
              }
              onClick={() => {
                setFilter("major");
                setSelectedCard(null);
              }}
            >
              Arcanos Mayores
            </button>

            <button
              className={
                filter === "cups"
                  ? "card-filter active"
                  : "card-filter"
              }
              onClick={() => {
                setFilter("cups");
                setSelectedCard(null);
              }}
            >
              Copas
            </button>

            <button
              className={
                filter === "wands"
                  ? "card-filter active"
                  : "card-filter"
              }
              onClick={() => {
                setFilter("wands");
                setSelectedCard(null);
              }}
            >
              Bastos
            </button>

            <button
              className={
                filter === "swords"
                  ? "card-filter active"
                  : "card-filter"
              }
              onClick={() => {
                setFilter("swords");
                setSelectedCard(null);
              }}
            >
              Espadas
            </button>

            <button
              className={
                filter === "pentacles"
                  ? "card-filter active"
                  : "card-filter"
              }
              onClick={() => {
                setFilter("pentacles");
                setSelectedCard(null);
              }}
            >
              Oros
            </button>
          </section>


          {/* RESULTADOS */}

          <section>
            <div className="card-section-header">
              <h2>
                {filter === "all"
                  ? "Todas las cartas"
                  : filter === "major"
                  ? "Arcanos Mayores"
                  : filter === "cups"
                  ? "Copas"
                  : filter === "wands"
                  ? "Bastos"
                  : filter === "swords"
                  ? "Espadas"
                  : "Oros"}
              </h2>

              <span className="card-count">
                {filteredCards.length} cartas
              </span>
            </div>

            <div className="card-grid">
              {renderCards(filteredCards)}
            </div>
          </section>
        </>
      )}


      {/* CONTENIDO DE COMBINACIONES */}

      {activeTab === "combinations" && ( <Combinations />)}

      {activeTab === "spreads" && <Spreads />}

      {activeTab === "reading-guides" && <ReadingGuides />}

    </main>
  );
}