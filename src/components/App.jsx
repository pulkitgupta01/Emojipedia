import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

//1. Create Entry component
//2. Create props to replace hardcoded data
//3. Import emojipedia const
//3. Create Mapping through emojipedia.js and render Entry component

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
