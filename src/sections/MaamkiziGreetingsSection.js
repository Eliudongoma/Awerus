import React, { useEffect, useState } from "react";

import { getGreetingsResponse } from "../services/fakeMaamkiziGreetingsResponse";
import GreetingResponse from "../components/GreetingResponse";
import PageNavigators from "../navigation/PageNavigators";

export default function MaamkiziGreetingsSection() {
  const [greetingsResponse, setGreetingsResponse] = useState([]);

  useEffect(() => {
    setGreetingsResponse(getGreetingsResponse());
  }, []);

  return (
    <section className="maamkizi">
      <h2>Maamkizi Greetings</h2>
      {greetingsResponse.map(({ greeting, response }) => (
        <GreetingResponse
          key={greeting}
          response={response}
          greeting={greeting}
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
