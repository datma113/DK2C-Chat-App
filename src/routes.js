import Login from "./pages/welcome/Login";
import Register from "./pages/welcome/Register";

import MessageRootPage from "./pages/message/MessageRootPage";
import Welcome from "./pages/welcome/Welcome";
import Home from "./pages/homePage/Home";

const routes = [
     { path: ["/index","/"], component: Home, exact: true },
     { path: ["/welcome"], component: Welcome, exact: true },
     { path: ["/message"], component: MessageRootPage, exact: true },
     { path: ["/login"], component: Login, exact: true },
     { path: ["/register"], component: Register, exact: true },
   
     //notFound & Exception
     { path: "", component: null, exact: true },
     
     //Note: Page not Found need stay last of array.
    
];
export default routes


