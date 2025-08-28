import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <>
        <h2 className="text-2xl font-[700] text-indigo-600 text-center">
          {props.results.word}
        </h2>
        <h3 className="text-xl tracking-wider mb-4 text-center md:mb-8">
          /{props.results.phonetic}/
        </h3>
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
    return null;
  }
}
