import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ButtonsLibraryPage from "./UI/buttons";
import InputsLibraryPage from "./UI/inputs";
import SelectsLibraryPage from "./UI/selects";
import TextareasLibraryPage from "./UI/textareas";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buttons" element={<ButtonsLibraryPage />} />
      <Route path="/inputs" element={<InputsLibraryPage />} />
      <Route path="/selects" element={<SelectsLibraryPage />} />
      <Route path="/textareas" element={<TextareasLibraryPage />} />
    </Routes>
  );
}

export default App;
