import { useState } from "react";
import './counter.css'
function Counter()
{
    const[count,setCount] = useState(0);
    function increment()
    {
        setCount(count+1);
    }
     function decrement()
    {
        setCount(count-1);
    }
    function reset()
    {
        setCount(0);
    }
    return(
        <div>
            <h1> Counter Component</h1>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}export default Counter;