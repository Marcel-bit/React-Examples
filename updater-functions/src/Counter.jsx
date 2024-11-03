import React, {useState} from 'react';

function Counter(){

    const[count, setCount] = useState(0);

    const increment = () => {
        // setCount(count + 1);//uses the current state of count to update the function
        // setCount(count + 1);

        setCount(c => c + 1);//uses the previous state of count to update the function - name is first letter of parent(count)
        setCount(c => c + 1);
    }

    const decrement = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>

        </div>
    )

}

export default Counter