import { useState } from "react";
import Results from "./Results";
import Images from "./Images";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setkeyword] = useState(null);
  const [results, setResults] = useState(null);
  const [images, setImages] = useState(null);

  function handleDictionaryResponses(response) {
    setResults(response.data);
  }

  function handleImageApiResponse(response) {
    setImages(response.data);
  }

  function search(event) {
    event.preventDefault();
    const dictionaryApiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=c3ae07f646b904bce9d83oat69c5764d`;
    const imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=c3ae07f646b904bce9d83oat69c5764d`;

    axios
      .all([axios.get(dictionaryApiUrl), axios.get(imageApiUrl)])
      .then(
        axios.spread((dictionaryResponse, imageResponse) => {
          handleDictionaryResponses(dictionaryResponse);
          handleImageApiResponse(imageResponse);
        })
      )
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }

  function handleKeywordChange(event) {
    setkeyword(event.target.value);
  }

  return (
    <>
      <form
        onSubmit={search}
        className="flex flex-row gap-4 mb-6 justify-center md:mb-8"
      >
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a word"
          autoFocus
          className="border border-indigo-600 p-2 rounded-sm focus:outline-2 focus:outline-indigo-600"
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
      <Images images={images} />
    </>
  );
}
