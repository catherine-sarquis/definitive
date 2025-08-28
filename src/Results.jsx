import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <>
        <h2>{props.results.word}</h2>
        <h3>{props.results.phonetic}</h3>
        <div>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </>
    );
  } else {
    return <div>Sorry, we have not information about that word.</div>;
  }
}
