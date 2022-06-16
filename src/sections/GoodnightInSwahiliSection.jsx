import React, { useEffect, useState } from "react";

import { getGoodnightsInSwahili } from "../services/fakeGoodnightInSwahiliService";
import PageNavigators from "../navigation/PageNavigators";
import SwahiliEnglish from "../components/SwahiliEnglish";

export default function GoodnightInSwahiliSection() {
  const [goodnights, setGoodnights] = useState([]);

  useEffect(() => {
    setGoodnights(getGoodnightsInSwahili());
  }, []);

  return (
    <>
      <h2>Goodnight in Swahili</h2>
      {goodnights.map(({ english, swahili }) => (
        <SwahiliEnglish key={swahili} english={english} swahili={swahili} />
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
