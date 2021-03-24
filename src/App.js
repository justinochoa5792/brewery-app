import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Find from "./components/Find";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/find" component={Find} />
      </Switch>
    </div>
  );
}

export default App;
