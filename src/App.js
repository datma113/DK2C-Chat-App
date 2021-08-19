import Header from "./components/Header";
import "./assets/css/styles.css";
import Welcome from "./pages/welcome/Welcome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";

function App() {
    const maproutes = routes.map((route, index) => {
        return (
          <Route key={index}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        );
      });
    return (
        <Router>
        <div className="App">
          <div className="">
            <Header />
            <Switch>{maproutes}</Switch>
            <br></br>
  
  
  
          </div>
  
        </div>
      </Router>
    );
}

export default App;
