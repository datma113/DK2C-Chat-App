import Header from "./components/Header";
import "./assets/css/styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";

function App() {
    const mapRoutes = routes.map((route, index) => {
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
            <Switch>{mapRoutes}</Switch>
          </div> 
        </div>
      </Router>
    );
}

export default App;
