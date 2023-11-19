import {useState, useEffect} from "react"

export default function CountButton(props){
    let [count, setCount] = useState(0)
    function handleClick(){
        setCount(count + 1 * props.mult)
    }
    function rollOverCount(){
        if (count > 10){
            setCount(0)
        }
    }
    useEffect(rollOverCount,[count])
    return (
        <div style={{marginLeft:"auto", marginRight:"auto", padding: "1em 2em 0 2em"}}>
            <button onClick={handleClick} style={{padding:"2rem", border:"2px solid white"}}>{props.name}</button>
            <div>{count}</div>
        </div>
    )
}