import React from "react";

import GreetingResponse from "../components/GreetingResponse";

export default function MaamkiziGreetingsSection() {
  return (
    <section className="maamkizi">
      <h2>Maamkizi Greetings</h2>
      <GreetingResponse
        response="Sijambo (I am fine / no worries)"
        greeting="Hujambo or jambo (how are you?)"
      />
      <GreetingResponse
        response="nzuri  (fine)"
        greeting="Habari? (any news?)"
      />
      <GreetingResponse
        response="njema (fine)"
        greeting="U hali gani? (oo HAlii GAnii) (how are you)"
      />
      <GreetingResponse
        response="nzuri (fine)"
        greeting="Mhali gani (how are you – to two or more people)"
      />
      <GreetingResponse
        response="marahaba"
        greeting="Shikamoo (a young person to an elder)"
      />
      <GreetingResponse
        response="Poa ( fine,okay)"
        greeting="For casual interactions: mambo? Or Vipi? Or Sema?"
      />
      <GreetingResponse
        response="nzuri (fine)"
        greeting="Habari za asubuhi (good morning)"
      />
      <GreetingResponse
        response="nzuri"
        greeting="Habari za mchana (good afternoon)"
      />
      <GreetingResponse
        response="nzuri"
        greeting="Habari za jioni (good evening)"
      />
      <GreetingResponse
        response="Poa"
        greeting="Umeshindaje ?( how has your day been ? )"
      />
      <GreetingResponse
        response="Naendelea vyema/poa ( I am doing well)"
        greeting="Unaendeleaje ? ( How’s the going )"
      />
      <GreetingResponse response="Poa" greeting="Mambo (MAmbo) – What’s up?" />
      <GreetingResponse response="Poa" greeting="Vipi? (Viipii?) – how?" />
      <GreetingResponse response="Poa" greeting="Sema? (SEma?) – speak?" />
      <GreetingResponse
        response="Poa / Freshi"
        greeting="Niambie? ( talk to me ?)  "
      />
    </section>
  );
}
