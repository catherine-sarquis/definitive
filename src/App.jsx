import Footer from "./Footer";
import Dictionary from "./Dictionary";

import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col w-5/6 p-8 m-auto md:w-2/3">
        <main>
          <h1 className="text-2xl font-[900] tracking-wide text-indigo-600 text-center md:text-5xl mb-6 md:mb-8">
            Definitive.
          </h1>
          <Dictionary />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
