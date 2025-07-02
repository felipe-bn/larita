import React, { useState } from "react";
import "../assets/CardComponentStyles.css";

const messages = [
  "Lara, tu sonrisa es mi refugio favorito.",
  "Si el amor tuviera un nombre, se llamaría como vos: Lara.",
  "Cada día contigo es un poema que nunca termina.",
  // ... más mensajes
];

export default function CardComponent() {
  const [index, setIndex] = useState(Math.floor(Math.random() * messages.length));

  const handleClick = () => {
    let newIndex = Math.floor(Math.random() * messages.length);
    while (newIndex === index) newIndex = Math.floor(Math.random() * messages.length); // evitar repetición inmediata
    setIndex(newIndex);
  };

  return (
    <div className="message-container">
      <p>{messages[index]}</p>
      <button className="next-button" onClick={handleClick}>💌 Otro mensaje</button>
    </div>
  );
}
