import React from "react";
import {hot} from "react-hot-loader";
import './sass/app.scss';
import Counter from "./components/Counter";

const App = () => {

    return (
        <div className="App">
            <Counter/>
        </div>
    );
}
export default hot(module)(App);
// export default App;