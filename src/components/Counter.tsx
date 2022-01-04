import React, {useState} from "react";
import styles from "./counter.module.scss";
import {hot} from "react-hot-loader";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter( (prevValue:number) => prevValue + 1);
    };


    return (
        <div className={styles.counter}>
            <h1>I'm configuring setting up Webpack!!!</h1>
            <p>{`The count now is: ${counter}`}</p>
            <button onClick={handleClick} className={styles.countButton}>Click me</button>
        </div>
    );
}

export default hot(module)(Counter);