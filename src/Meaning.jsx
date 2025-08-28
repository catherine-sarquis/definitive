import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="flex flex-col gap-2 md:gap-4 border border-indigo-600 p-4 mb-6 md:mb-8 shadow-md">
      <h3 className="text-indigo-600 font-[600]">
        {props.meaning.partOfSpeech}
      </h3>
      <p className="font-[400]">{props.meaning.definition}</p>
      <p className="italic">{props.meaning.example}</p>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
