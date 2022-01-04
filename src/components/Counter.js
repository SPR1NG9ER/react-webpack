import React, {useState} from "react";
import style from "./counter.module.scss";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter( prevValue => prevValue + 1);
    };


    return (
        <div className={style.counter}>
            <h1>I'm configuring setting up Webpack!!!</h1>
            <p>{`The count now is: ${counter}`}</p>
            <button onClick={handleClick} className={style.countButton}>Click me</button>
        </div>
    );
}

export default Counter;