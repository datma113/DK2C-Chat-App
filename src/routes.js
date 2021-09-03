import Login from "./pages/welcome/Login";
import Register from "./pages/welcome/Register";
import Home from "./pages/homePage/Home";
import NotFound from "./pages/404/NotFound";

const routes = [
     { path: ["/"], component: Home, exact: true },
     { path: ["/login"], component: Login, exact: true },
     { path: ["/register"], component: Register, exact: true },
   
     //notFound & Exception
     { path: "", component: NotFound, exact: true },
     
     //Note: Page not Found need stay last of array.
    
];
export default routes


