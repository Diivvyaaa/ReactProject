import Header from "./Components/Head/Header";
import Footer from "./Components/Foot/Footer";
import Home from "./Components/home/Home";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf7f2]">
      <Header />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
