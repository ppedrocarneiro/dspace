import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Documentacao from "./components/pages/Documentacao";
import NewDocumentacao from "./components/pages/Newdocumentacao";
import MinhaDocumentacoes from "./components/pages/MinhaDocumentacoes";

import Container from "./components/Layout/Container";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass='min-height'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/documentacao" element={<Documentacao />} />
          <Route
            exact
            path="/MinhasDocumentacoes"
            element={<MinhaDocumentacoes />}
          />
          <Route exact path="/newdocumentacao" element={<NewDocumentacao />} />
        </Routes>
      </Container>

      <Footer/>
    </Router>
  );
}

export default App;
