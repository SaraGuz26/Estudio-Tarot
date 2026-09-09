import type { TarotCard as TarotCardData } from "../../types/card";

interface Props {
  card: TarotCardData;
  onSelect: (card: TarotCardData) => void;
}

export function TarotCard({ card, onSelect }: Props) {
  return (
    <article
      className="tarot-card"
      onClick={() => onSelect(card)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          onSelect(card);
        }
      }}
    >
      <div className="tarot-card__image">
        <img src={card.image} alt={card.name} />
      </div>

      <h3>{card.name}</h3>
    </article>
  );
}