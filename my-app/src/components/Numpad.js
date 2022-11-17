import { React, useState, useEffect } from "react"

const Numpad = ({optName, val, addFunc}) => {
    const [number, setNumber] = useState();

    useEffect(() => {
        if (!val){
            setNumber(0);
        } else {
            setNumber(val);
        }
    }, [val]);

    function write(x){
        if (number === 0){
            setNumber(x);
        } else {
            setNumber(number + x);
        }
    }

    function back(){
        
        if (String(number).length === 1){
            setNumber(0);
        } else {
            setNumber(number.substring(0, number.length - 1));
        }
    }

    return (
        <>
        <div className="add-button">{number}%</div>
        <div className= "numpad noselect clickable">
            <div>
                <div className="num" onClick={()=>write("1")}>1</div>
                <div className="num" onClick={()=>write("4")}>4</div>
                <div className="num" onClick={()=>write("7")}>7</div>
                <div 
                    className="num" 
                    onClick={()=>{addFunc(optName, number)}}>
                    Add
                </div>
            </div>
            <div>
                <div className="num" onClick={()=>write("2")}>2</div>
                <div className="num" onClick={()=>write("5")}>5</div>
                <div className="num" onClick={()=>write("8")}>8</div>
                <div className="num" onClick={()=>write("0")}>0</div>
            </div>
            <div>
                <div className="num" onClick={()=>write("3")}>3</div>
                <div className="num" onClick={()=>write("6")}>6</div>
                <div className="num" onClick={()=>write("9")}>9</div>
                <div className="num" onClick={()=>back()}>Back</div>
            </div>
        </div>
        </>
    );
}

export default Numpad;
