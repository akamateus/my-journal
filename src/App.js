import "./App.css";
import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <main className="app__main">
          <EntryForm />
          <EntriesSection />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
