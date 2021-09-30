import "./App.css";
import Content from "./components/Content";
import Search from "./components/Search";
import { Route, Switch, Redirect } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/wiki/:name" component={Content} />
        <Redirect from="/" to="/search" />
      </Switch>
    </div>
  );
};
export default App;
