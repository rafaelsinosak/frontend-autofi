import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Footer, Main } from "./components";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Switch>
          <Route path="/" exact component={Main} />
          <Route> 404 Not Found!</Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
