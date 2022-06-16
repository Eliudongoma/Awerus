import React from "react";

import { getPhrases } from "../services/fakePhrasesService";
import PageNavigators from "../navigation/PageNavigators";
import SwahiliEnglish from "../components/SwahiliEnglish";
import useApi from "../hooks/useApi";

export default function Phrases() {
  const { data } = useApi(getPhrases);

  return (
    <>
      <h2>Other useful phrases that will come in handy</h2>
      {data.map(({ english, swahili }) => (
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
