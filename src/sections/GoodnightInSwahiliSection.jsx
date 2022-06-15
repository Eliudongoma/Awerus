import React, { useEffect, useState } from "react";

import { getGoodnightsInSwahili } from "../services/fakeGoodnightInSwahiliService";
import GreetingResponse from "../components/GreetingResponse";
import PageNavigators from "../navigation/PageNavigators";

export default function GoodnightInSwahiliSection() {
  const [goodnightsInSwahili, setGoodnightsInSwahili] = useState([]);

  useEffect(() => {
    setGoodnightsInSwahili(getGoodnightsInSwahili());
  }, []);

  return (
    <>
      <h2>Goodnight in Swahili</h2>
      {goodnightsInSwahili.map(({ english, swahili }) => (
        <GreetingResponse key={swahili} response={english} greeting={swahili} />
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
