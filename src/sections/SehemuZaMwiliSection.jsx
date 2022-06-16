import React, { useEffect, useState } from "react";

import { getSehemuZaMwili } from "../services/fakeSehemuZaMwiliService";
import PageNavigators from "../navigation/PageNavigators";
import SwahiliEnglish from "../components/SwahiliEnglish";

export default function SehemuZaMwiliSection() {
  const [sehemuZaMwili, setSehemuZaMwili] = useState([]);

  useEffect(() => {
    setSehemuZaMwili(getSehemuZaMwili());
  }, []);

  return (
    <section>
      <h2>Sehemu Za Mwili</h2>
      {sehemuZaMwili.map(({ english, swahili }) => (
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
