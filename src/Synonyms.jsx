export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="flex flex-wrap w-full gap-y-2 gap-x-4 ">
        {props.synonyms.map(function (synonym, index) {
          return (
            <p
              key={index}
              className="semiCondensed py-1 px-2 border rounded-sm border-indigo-600 text-indigo-600"
            >
              {synonym}
            </p>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
