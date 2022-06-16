import React, { useEffect, useState } from "react";

import { getMazoezi, getSikuZaWiki } from "../services/fakeSikuZaWikiService";
import GreetingResponse from "../components/GreetingResponse";
import PageNavigators from "../navigation/PageNavigators";

export default function SikuZaWikiSection() {
  const [sikuZaWiki, setSikuZaWiki] = useState([]);
  const [mazoezi, setMazoezi] = useState([]);

  useEffect(() => {
    setSikuZaWiki(getSikuZaWiki());
    setMazoezi(getMazoezi());
  }, []);

  return (
    <>
      <h2>Siku za Wiki (Days of the Week)</h2>
      {sikuZaWiki.map(({ english, swahili }) => (
        <GreetingResponse key={swahili} greeting={swahili} response={english} />
      ))}
      <h3 className="zoezi">Zoezi</h3>
      {mazoezi.map(({ kichwa, maswali }) => (
        <>
          <p className="zoezi__kichwa">{kichwa}</p>
          {maswali.map(({ swali }) => (
            <p>{swali}</p>
          ))}
        </>
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
