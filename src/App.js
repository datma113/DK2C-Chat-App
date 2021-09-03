import Header from "./components/Header";
import "./assets/css/styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import { useSelector } from "react-redux";

function App() {
    const mapRoutes = routes.map((route, index) => {
        return (
            <Route key={index} path={route.path} component={route.component} exact={route.exact} />
        );
    });
    const authentication = useSelector(state => state.authentication)

    return (
        <Router>
            <div className="App">
              {authentication.isLoggin && <Header/>}  
                <Switch>{mapRoutes}</Switch>
            </div>
        </Router>
    );
}

export default App;
