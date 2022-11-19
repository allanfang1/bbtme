import { React, useState, useEffect } from "react"

const Numpad = ({optName, val, addFunc, setNumFunc}) => {
    // const [number, setNumber] = useState();

    useEffect(() => {
        console.log(val);
    }, [val]);

    // useEffect(() => {
    //     if (!val){
    //         setNumber(0);
    //     } else {
    //         setNumber(val);
    //     }
    // }, [val]);

    // function write(x){
    //     if (number === 0){
    //         setNumber(x);
    //     } else {
    //         setNumber(number + x);
    //     }
    // }

    // function back(){
    //     if (String(number).length === 1){
    //         setNumber(0);
    //     } else {
    //         setNumber(number.substring(0, number.length - 1));
    //     }
    // }

    return (
        <>
        <div className="add-button">{val}%</div>
        <div className= "numpad noselect clickable">
            <div>
                <div className="num" onClick={()=>(1)}>1</div>
                <div className="num" onClick={()=>setNumFunc(4)}>4</div>
                <div className="num" onClick={()=>setNumFunc(7)}>7</div>
                <div 
                    className="num" 
                    onClick={()=>{addFunc(optName)}}>
                    Add
                </div>
            </div>
            <div>
                <div className="num" onClick={()=>setNumFunc(2)}>2</div>
                <div className="num" onClick={()=>setNumFunc(5)}>5</div>
                <div className="num" onClick={()=>setNumFunc(8)}>8</div>
                <div className="num" onClick={()=>setNumFunc(0)}>0</div>
            </div>
            <div>
                <div className="num" onClick={()=>setNumFunc(3)}>3</div>
                <div className="num" onClick={()=>setNumFunc(6)}>6</div>
                <div className="num" onClick={()=>setNumFunc(9)}>9</div>
                <div className="num" onClick={()=>setNumFunc(-1)}>Back</div>
            </div>
        </div>
        </>
    );
}

export default Numpad;
