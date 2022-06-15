import React, { useEffect, useState } from "react";

import { getPhrases } from "../services/fakePhrasesService";
import GreetingResponse from "../components/GreetingResponse";
import PageNavigators from "../navigation/PageNavigators";

export default function Phrases() {
  const [phrases, setPhrases] = useState([]);

  useEffect(() => {
    setPhrases(getPhrases());
  }, []);

  return (
    <>
      <h2>Other useful phrases that will come in handy</h2>{" "}
      {phrases.map(({ english, swahili }) => (
        <GreetingResponse greeting={swahili} response={english} />
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
