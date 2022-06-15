import React, { useEffect, useState } from "react";

import contentsService from "../services/Contents";
import chevronDown from "../assets/icons/chevron-down.svg";
import chevronRight from "../assets/icons/chevron-right.svg";
import TableContents from "./TableContents";

export default function TableOfContents() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contents, setContents] = useState([]);

  useEffect(() => {
    setContents(contentsService.getContents());
  }, []);

  const getChevron = () => (isExpanded ? chevronDown : chevronRight);

  return (
    <section
      className="tableOfContent collapsible"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <article>
        <section className="tableOfContent__header">
          <p className="tableOfContent__heading">On this page</p>
          <img className="icon" src={getChevron()} alt="chevron icon" />
        </section>
        {isExpanded && <TableContents contents={contents} />}
      </article>
    </section>
  );
}
