import React, { useState } from "react";

import chevronDown from "../assets/icons/chevron-down.svg";
import chevronRight from "../assets/icons/chevron-right.svg";

export default function QuestionAnswer({ greeting, response }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getChevron = () => (isExpanded ? chevronDown : chevronRight);

  return (
    <article className="questionAnswer">
      <section
        className="questionAnswer__greeting"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <p className="greeting">{greeting}</p>
        <img src={getChevron()} alt="chevron icon" className="icon" />
      </section>
      {isExpanded && <p className="translation response">Reply : {response}</p>}
    </article>
  );
}
