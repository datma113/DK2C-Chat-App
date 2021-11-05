import Login from "./pages/welcome/Login";
import Register from "./pages/welcome/Register";
import HomePage from "./pages/homePage/HomePage";
import NotFound from "./pages/404/NotFound";
import FriendHome from "./pages/friends/FriendHome";
import ChangePassword from './pages/changePassword/ChangePassword'

const routes = [
     { path: ["/"], component: HomePage, exact: true },
     { path: ["/login"], component: Login, exact: true },
     { path: ["/register"], component: Register, exact: true },
     { path: ["/friends"], component: FriendHome, exact: true },
     { path: ["/ChangePassword"], component: ChangePassword, exact: true },

     //notFound & Exception
     { path: "", component: NotFound, exact: true },
     
     //Note: Page not Found need stay last of array.
    
];
export default routes


