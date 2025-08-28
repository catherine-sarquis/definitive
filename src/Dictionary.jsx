import { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setkeyword] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
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
    <form onSubmit={search}>
      <input
        type="search"
        name="search"
        id="search"
        autoFocus
        className="border"
        onChange={handleKeywordChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}
