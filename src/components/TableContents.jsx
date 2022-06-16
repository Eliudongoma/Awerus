import React from "react";
import { NavLink } from "react-router-dom";

export default function TableContent({ contents = [] }) {
  return (
    <section>
      {contents.map(({ url, heading }) => (
        <NavLink to={url} key={heading}>
          <p className="content" onClick={() => {}}>
            {heading}
          </p>
        </NavLink>
      ))}
    </section>
  );
}
