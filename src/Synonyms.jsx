export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <ul className="flex flex-row">
        {props.synonyms.map(function (synonym, index) {
          return (
            <li key={index} className="mr-6">
              {synonym}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
