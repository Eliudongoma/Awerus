import React from "react";

export default function PageNavigators({
  onNextNavigation,
  onPreviousNavigation,
  nextSectionName,
  previousSectionName,
}) {
  return (
    <section className="pages-navigators">
      {previousSectionName && (
        <section className="page-navigator" onClick={onPreviousNavigation}>
          <p>Previous</p>
          <p className="page-navigator__section-name">{previousSectionName}</p>
        </section>
      )}

      {nextSectionName && (
        <section
          className="page-navigator next-page-navigator"
          onClick={onNextNavigation}
        >
          <p>Next</p>
          <p className="page-navigator__section-name">{nextSectionName}</p>
        </section>
      )}
    </section>
  );
}
