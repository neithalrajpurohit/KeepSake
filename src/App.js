import { Routes } from "react-router";
import "./App.css";
import { Header } from "./components/Header";
import { Notes } from "./components/Notes";
import { Reminders } from "./components/Reminders";
import { Trash } from "./components/Trash";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Routes path="/" element={<Notes />} />
        <Routes path="/reminders" element={<Reminders />} />
        <Routes path="/trash" element={<Trash />} />
      </Routes>
    </div>
  );
}

export default App;
