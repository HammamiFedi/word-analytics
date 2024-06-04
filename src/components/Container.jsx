import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";
import {
  EMPTY_STRING,
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
  SPACE,
} from "../lib/constants";

function Container() {
  const [text, setText] = useState(EMPTY_STRING);

  const stats = {
    numberOfCharacters: text.length,
    numberOfWords: text.split(SPACE).filter((word) => word !== EMPTY_STRING)
      .length,
    instagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
    facebookCharactersLeft: FACEBOOK_MAX_CHARACTERS - text.length,
  };

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}

export default Container;
