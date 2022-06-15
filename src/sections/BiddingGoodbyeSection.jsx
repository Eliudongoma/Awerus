import React, { useEffect, useState } from "react";

import { getGoodByes } from "../services/fakeBiddingGoodbyeService";
import GreetingResponse from "../components/GreetingResponse";
import PageNavigators from "../navigation/PageNavigators";

export default function BiddingGoodbyeSection() {
  const [goodbyes, setGoodbyes] = useState([]);

  useEffect(() => {
    setGoodbyes(getGoodByes());
  }, []);

  return (
    <>
      <h2>Bidding Goodbye in Swahili</h2>
      {goodbyes.map(({ swahili, english }) => (
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
