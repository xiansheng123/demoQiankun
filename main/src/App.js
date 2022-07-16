import logo from './logo.svg';
import './App.css';
import {registerMicroApps, start} from "qiankun";
import {Link} from "react-router-dom";


function App() {

    registerMicroApps([
        {
            name: 'sub-react-one',
            entry: '//localhost:3020',
            container: '#sub-react-one',
            activeRule: '/sub-react-one',
            props:{name:"xuda",age:20}
        }
    ]);
    start();
    return (
        <div className="App">
            <h1>main app</h1>

            <Link to="/">home</Link>

            <div id="sub-react-one">
                <div>sub reach here</div>
                <nav style={{
                    borderBottom: "solid #000",
                    paddingBottom: "1rem"
                }}>
                    <Link to="/sub-react-one">sub react</Link>
                </nav>
            </div>
        </div>
    );
}

export default App;
