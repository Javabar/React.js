import {useState} from 'react';

const CountButton = (props) => {
    const [currentCount, setCurrentCount] = useState(0)

    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy)
        }
    
    const divStyle = {
        color: "red",
        border:"1px solid",
        borderRadius: "10px",
    }    

    const buttonStyle = {
        background:"yellow",
        borderRadius:"5px",
    }
    return ( 
        <div style={divStyle}>
            <button style={buttonStyle} onClick={handleClick}>+{props.incrementBy}</button>
            <div>{currentCount}</div>
        </div>
        ); 
    };
 
export default CountButton;