import React, { useEffect, useState } from "react";

import { getGreetingsResponse } from "../services/fakeMaamkiziGreetingsResponse";
import PageNavigators from "../navigation/PageNavigators";
import SwahiliEnglish from "../components/SwahiliEnglish";

export default function MaamkiziGreetingsSection() {
  const [greetingsResponse, setGreetingsResponse] = useState([]);

  useEffect(() => {
    setGreetingsResponse(getGreetingsResponse());
  }, []);

  return (
    <section className="maamkizi">
      <h2>Maamkizi Greetings</h2>
      {greetingsResponse.map(({ greeting, response }) => (
        <SwahiliEnglish
          key={greeting}
          english={"Jibu: " + response}
          swahili={greeting}
        />
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
