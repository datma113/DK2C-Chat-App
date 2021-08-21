import Header from "./components/Headercopy";
import "./assets/css/styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";

function App() {
    const mapRoutes = routes.map((route, index) => {
        return (
            <Route key={index} path={route.path} component={route.component} exact={route.exact} />
        );
    });
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>{mapRoutes}</Switch>
            </div>
        </Router>
    );
}

export default App;
