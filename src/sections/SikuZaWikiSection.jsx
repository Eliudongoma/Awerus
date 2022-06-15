import React, { useEffect, useState } from "react";

import { getSikuZaWiki } from "../services/fakeSikuZaWikiService";
import GreetingResponse from "../components/GreetingResponse";
import PageNavigators from "../navigation/PageNavigators";

export default function SikuZaWikiSection() {
  const [sikuZaWiki, setSikuZaWiki] = useState([]);

  useEffect(() => {
    setSikuZaWiki(getSikuZaWiki());
  }, []);

  return (
    <>
      <h2>Siku za Wiki (Days of the Week)</h2>
      {sikuZaWiki.map(({ english, swahili }) => (
        <GreetingResponse key={swahili} greeting={swahili} response={english} />
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
