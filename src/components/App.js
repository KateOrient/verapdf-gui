import React from 'react';
import logo from './vera-logo.png';
import MaterialIcon from 'material-icons-react';

import './App.css';
import Home from './home/Home';
import HelpMenu from "./header/helpMenu/HelpMenu";

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <header>
                    <img src={logo} alt="logo"/>
                    <h2>PDF/A Conformance Checker</h2>
                    <HelpMenu/>
                </header>
                <article>
                    <Home/>
                </article>
                <footer>
                    { /* Here will be components to control info view settings */ }
                </footer>
            </div>
        );
    }
}

export default App;
