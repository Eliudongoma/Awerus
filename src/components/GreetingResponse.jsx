import React from "react";

import UseChevron from "../hooks/useChevron";

export default function GreetingResponse({ greeting, response }) {
  const { isExpanded, getChevron, toggleExpansion } = UseChevron();

  return (
    <article className="questionAnswer">
      <section className="questionAnswer__greeting" onClick={toggleExpansion}>
        <p className="greeting">{greeting}</p>
        <img src={getChevron()} alt="chevron icon" className="icon" />
      </section>
      {isExpanded && <p className="translation response">Reply : {response}</p>}
    </article>
  );
}
