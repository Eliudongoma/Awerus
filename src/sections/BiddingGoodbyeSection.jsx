import React from "react";

import { getGoodByes } from "../services/fakeBiddingGoodbyeService";
import PageNavigators from "../navigation/PageNavigators";
import SwahiliEnglish from "../components/SwahiliEnglish";
import useApi from "../hooks/useApi";

export default function BiddingGoodbyeSection() {
  const { data: goodbyes } = useApi(getGoodByes);

  return (
    <section>
      <h2>Bidding Goodbye in Swahili</h2>
      {goodbyes.map(({ swahili, english }) => (
        <SwahiliEnglish swahili={swahili} english={english} />
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
