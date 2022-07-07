import React from "react";
//Не забываем импортировать компонент
import Card from "./Card";

const cards = [
  { title: "Зимние ботинки", price: "99", description: "Такие только у нас",},
  { title: "Пляжные тапки", price: "23", description: "Надеюсь, пригодятся" },
  {
    title: "Праздничные туфли",
    price: "85",
    description: "Теперь и в черном цвете",
  },
];

function CardList() {
  return (
    <div>
        {cards.map((card)=><Card title={card.title} price={card.price} description={card.description}/>)}
    </div>
  );
}

export default CardList;
