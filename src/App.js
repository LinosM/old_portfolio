import './App.css';
import NavbarH from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <div className="body">
        <NavbarH />
        <Wrapper>
          <Container>
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Portfolio" component={Portfolio} />
            <Route exact path="/Contact" component={Contact} />
          </Container>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
