import Login from "./pages/welcome/Login";
import MessageRootPage from "./pages/message/MessageRootPage";
import Welcome from "./pages/welcome/Welcome";

const routes = [
     { path: ["/index","/"], component: null, exact: true },
     { path: ["/welcome"], component: Welcome, exact: true },
     { path: ["/message"], component: MessageRootPage, exact: true },
     { path: ["/login"], component: Login, exact: true },
   
     //notFound & Exception
     { path: "", component: null, exact: true },
     
     //Note: Page not Found need stay last of array.
    
];
export default routes


