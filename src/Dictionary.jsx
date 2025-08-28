import { useState } from "react";
import Results from "./Results";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setkeyword] = useState(null);
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=c3ae07f646b904bce9d83oat69c5764d`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setkeyword(event.target.value);
  }

  return (
    <>
      <form
        onSubmit={search}
        className="flex flex-row gap-4 mb-6 justify-center"
      >
        <input
          type="search"
          name="search"
          id="search"
          autoFocus
          className="border border-indigo-600 p-2 rounded-sm"
          onChange={handleKeywordChange}
        />
        <button
          type="submit"
          className="rounded-sm bg-indigo-600 text-white px-4 py-2"
        >
          Search
        </button>
      </form>
      <Results results={results} />
    </>
  );
}
