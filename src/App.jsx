import Footer from "./Footer";
import Dictionary from "./Dictionary";

import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col w-5/6 p-8 m-auto">
        <main>
          <h1 className="text-xl text-center md:text-5xl">Definitive</h1>
          <Dictionary />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
