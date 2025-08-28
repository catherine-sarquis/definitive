import { useState } from "react";
export default function Dictionary() {
  const [keyword, setkeyword] = useState(null);
  function search(event) {
    event.preventDefault();
    alert("searching");
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
