import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Erreur from "./pages/Erreur";
import Apropos from "./pages/a-propos";
import "./assets/css/main.css";
import AccomodationDetails from "./pages/AccomodationDetails";
import Header from "./components/Header";
import Footer from "./components/footer";
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<Apropos />} />
        {/* path allows to display a page according to the id item */}
        <Route path="/logement/:id/:host" element={<AccomodationDetails />} />
        {/* path="*" allows to display a 404 error if the path does not match any set path */}
        <Route path="*" element={<Erreur />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
