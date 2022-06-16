import React, { useEffect, useState } from "react";

import { getPhrases } from "../services/fakePhrasesService";
import PageNavigators from "../navigation/PageNavigators";
import SwahiliEnglish from "../components/SwahiliEnglish";

export default function Phrases() {
  const [phrases, setPhrases] = useState([]);

  useEffect(() => {
    setPhrases(getPhrases());
  }, []);

  return (
    <>
      <h2>Other useful phrases that will come in handy</h2>
      {phrases.map(({ english, swahili }) => (
        <SwahiliEnglish swahili={swahili} english={english} />
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
