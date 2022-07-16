import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./public-path"
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Invoices from "./component/Invoices";

let qiankunRoot;
function renderForQianKun(props) {
    const {container} = props;
    const root = ReactDOM.createRoot(container ? container.querySelector('#root') : document.querySelector('#root'))
    qiankunRoot= root;
    root.render(
        <React.StrictMode>
            <BrowserRouter basename="/sub-react-one">
                <Routes>
                    <Route path="/" element={<App/>}></Route>
                    <Route path="/invoices" element={<Invoices/>}></Route>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>);
}

export async function bootstrap() {
    console.log("sub react app bootstraped")
}

export async function mount(props) {
    console.log("mount here")
    console.log('[react18] props from main framework', props);
    renderForQianKun(props);
}

export async function unmount(props) {
    const {container} = props;
    console.log("unmount here",props)
    // const root = ReactDOM.createRoot(container ? container.querySelector('#root') : document.querySelector('#root'))
    // container.container.querySelector('#root').unmount();
    // root.unmount();
    qiankunRoot.unmount();
}

export async function update(props) {
    console.log("update props", props);
}


if (!window.__POWERED_BY_QIANKUN__) {
    console.log("for outside using")
    const root = ReactDOM.createRoot(document.querySelector('#root'))
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}></Route>
                    <Route path="/invoices" element={<Invoices/>}></Route>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>);
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
