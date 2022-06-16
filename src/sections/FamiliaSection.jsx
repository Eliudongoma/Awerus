import React, { useEffect, useState } from "react";

import { getFamilia } from "../services/fakeFamiliaService";
import PageNavigators from "../navigation/PageNavigators";
import SwahiliEnglish from "../components/SwahiliEnglish";

export default function FamiliaSection() {
  const [familia, setFamilia] = useState([]);

  useEffect(() => {
    setFamilia(getFamilia());
  }, []);

  return (
    <section>
      <h2>Familia (Family)</h2>
      {familia.map(({ english, swahili }) => (
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
