import { useMemo, useState } from "react";

// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items.
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array

const words = ["hi", "my", "name", "is", "for", "to", "random", "word"];
const TOTAL_LINES = 1000;
const ALL_WORDS = [];
for (let i = 0; i < TOTAL_LINES; i++) {
  let sentence = "";
  for (let j = 0; j < words.length; j++) {
    sentence += words[Math.floor(words.length * Math.random())];
    sentence += " ";
  }
  ALL_WORDS.push(sentence);
}

export function Assignment2() {
  const [sentences, setSentences] = useState(ALL_WORDS);
  const [filter, setFilter] = useState("");

  // Basic approach - Filter the sentences based on the word present in them or not.
  // If there are more sentences, this can be a heavy operation.
  // This operation will be performed each time the app re-renders even if the filtered words and the sentences array don't change.
  const filteredSentences = sentences.filter((x) => x.includes(filter));

  // Best approach - Using useMemo hook to perform the operation and cache the value.
  // Wrap the operation inside useMemo hook. If the filtered words or the sentences array changes, it will re-compute.
  // After computing, it will return the value instead of re-rendering. useMemo doesen't requires any state variable.
  const ans = useMemo(() => {
    return sentences.filter((x) => x.includes(filter));
  }, [sentences, filter]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      ></input>
      {/* {filteredSentences.map((word) => (
        <div>{word}</div>
      ))} */}
      {ans.map((word) => (
        <div>{word}</div>
      ))}
    </div>
  );
}
