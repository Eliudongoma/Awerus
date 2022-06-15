import React from "react";

export default function TableContent({ contents = [] }) {
  return (
    <section>
      {contents.map((content) => (
        <p className="content" onClick={() => {}} key={content.heading}>
          {content.heading}
        </p>
      ))}
    </section>
  );
}
