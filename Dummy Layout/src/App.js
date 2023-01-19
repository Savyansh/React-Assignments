import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Content from "./Components/Content";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Content />
        <MainContent />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
