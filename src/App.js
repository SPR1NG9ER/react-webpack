import React, { Component } from "react";
import { hot } from "react-hot-loader";
import './sass/app.scss';
import Counter from "./components/Counter";

class App extends Component {

    render() {
        return (
            <div className="App">
                <Counter/>
            </div>
        );
    }
}
export default hot(module)(App);