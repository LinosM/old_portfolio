import React from "react"
import './App.css';
import NavbarH from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import { Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter>
      <div className="body">
        <NavbarH />
        <Wrapper>
          <Container>
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Portfolio" component={Portfolio} />
            <Route exact path="/Contact" component={Contact} />
          </Container>
          <Footer />
        </Wrapper>
      </div>
    </HashRouter>
  );
}

export default App;
