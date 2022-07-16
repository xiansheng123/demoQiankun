import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <h1>sub react 123</h1>
            <nav style={{
                borderBottom: "solid #000",
                paddingBottom: "1rem"
            }}>
                <Link to="/invoices">invoices</Link> |{" "}
                <Link to="/">Home</Link>
            </nav>
        </div>
    );
}

export default App;
