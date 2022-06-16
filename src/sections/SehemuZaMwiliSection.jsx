import React from "react";

import { getSehemuZaMwili } from "../services/fakeSehemuZaMwiliService";
import PageNavigators from "../navigation/PageNavigators";
import SwahiliEnglish from "../components/SwahiliEnglish";
import useApi from "../hooks/useApi";

export default function SehemuZaMwiliSection() {
  const { data } = useApi(getSehemuZaMwili);

  return (
    <section>
      <h2>Sehemu Za Mwili</h2>
      {data.map(({ english, swahili }) => (
        <SwahiliEnglish english={english} swahili={swahili} />
      ))}
      <PageNavigators
        nextSectionName="Greetings in Swahili"
        onPreviousNavigation={() => console.log("previuos")}
        onNextNavigation={() => console.log("next")}
        previousSectionName="Handy Words"
      />
    </section>
  );
}
