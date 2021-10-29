import Header from "./components/Header";
import "./assets/css/styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTokenWhenRefreshPage } from "./redux/action/actLogin";
import Loading from "./components/Loading";
import ProfileModal from "./pages/profile/ProfileModal";

function App() {
    const mapRoutes = routes.map((route, index) => {
        return (
            <Route key={index} path={route.path} component={route.component} exact={route.exact} />
        );
    });
    const authentication = useSelector((state) => state.authentication);
    const dispatch = useDispatch();
    const [isLoading, setisLoading] = useState(true);
    const userProfile = useSelector((state) => state.userInfo);

    useEffect(() => {
        dispatch(getTokenWhenRefreshPage()).then(() => {
            setisLoading(false);
        });
    }, [dispatch]);

    return (
        <Router>
            {isLoading && <Loading />}

            <div className="App">
                {authentication.isLoggin && <Header />}
                <ProfileModal userProfile={userProfile} />
                <Switch>{mapRoutes}</Switch>
            </div>
        </Router>
    );
}

export default App;
