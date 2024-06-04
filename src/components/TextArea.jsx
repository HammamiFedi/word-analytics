import { useState } from "react";
import Warning from "./Warning";
import { EMPTY_STRING, SCRIPT_TAG, SPACE } from "../lib/constants";

function TextArea({ text, setText }) {
  const [warningText, setWarningText] = useState(SPACE);

  const handleChange = (e) => {
    let newText = e.target.value;

    // Check if the text contains the script tag
    if (newText.includes(SCRIPT_TAG)) {
      // Delete the script tag
      newText = newText.replace("<script>", EMPTY_STRING);
      // Set the warning text
      setWarningText("No script tags allowed");
    } else {
      setWarningText(EMPTY_STRING);
    }

    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck="false"
      />
      {warningText !== EMPTY_STRING && <Warning warningText={warningText} />}
    </div>
  );
}

export default TextArea;
