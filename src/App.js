import Header from "./components/Header";
import "./assets/css/styles.css";
import Welcome from "./pages/welcome/Welcome";

function App() {
    return (
        <div className="App">
            <Header />
            <Welcome />
        </div>
    );
}

export default App;
