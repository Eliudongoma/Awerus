import React, { useEffect, useState } from "react";
import PageNavigators from "../navigation/PageNavigators";

import { getSikuSabaZaWiki } from "../services/fakeSikuZaWikiService";

export default function PangaSikuZaWikiSection() {
  const [sikuZaWiki, setSikuZaWiki] = useState([]);

  useEffect(() => {
    setSikuZaWiki(getSikuSabaZaWiki());
  }, []);

  return (
    <>
      <h2>Panga Siku Za Wiki</h2>
      {sikuZaWiki.map((siku) => (
        <p className="siku-ya-wiki">{siku.swahili}</p>
      ))}
      <PageNavigators
        nextSectionName="Greetings in Swahili"
        onPreviousNavigation={() => console.log("previuos")}
        onNextNavigation={() => console.log("next")}
        previousSectionName="Handy Words"
      />
    </>
  );
}
