import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {ClockLoader} from "react-spinners";

const App = React.lazy(() => import('./App'));

const rootId = document.getElementById("root");

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<ClockLoader/>}>
            <App/>
        </Suspense>
    </React.StrictMode>,
    rootId
);

if (module.hot && process.env.NODE_ENV === "development") {
    module.hot.accept("./App", () => {
        ReactDOM.render(
            <React.StrictMode>
                <Suspense fallback={<ClockLoader/>}>
                    <App/>
                </Suspense>
            </React.StrictMode>,
            rootId
        );
    });
}
