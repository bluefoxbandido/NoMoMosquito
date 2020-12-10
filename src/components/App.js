import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavContainer from "./nav-container";
import FooterContainer from "./footer";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Services from "./pages/services";


function App() {
  return (
    <div className="app">
      <Router>
          <header className="app-header">
            <NavContainer />
          </header>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/services" component={Services} />
          </Switch>
        </div>
        <FooterContainer/>
      </Router>
    </div>
  );
}

export default App;
