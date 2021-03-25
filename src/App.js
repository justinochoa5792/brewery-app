import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Find from "./components/Find";
import NavBar from "./components/NavBar";
import Random from "./components/Random";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/find" component={Find} />
        <Route exact path="/random" component={Random} />
      </Switch>
    </div>
  );
}

export default App;
