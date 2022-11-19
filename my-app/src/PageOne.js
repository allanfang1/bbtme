import { React, useState, useEffect } from "react";
import Category from "./components/Category";
import Option from "./components/Option";
import Numpad from "./components/Numpad";

export default function PageOne(){
    const categories = [
        {name:"Base", imglink:"/media/allan.png", content:["Brown Sugar Milk", "Rose Oolong", "Chai", "Passionfruit Green Tea"]},
        {name:"Topping", imglink:"/media/allan.png", content:["Tapioca", "Grass Jelly", "Sago", "Pudding", "Lychee Jelly"]},
        {name:"Tuning", imglink:"/media/allan.png", content:["Sugar", "Ice"]},
        {name:"Love", imglink:"/media/allan.png", content:["Yes"]},
    ]
    const [currCat, setCurrCat] = useState({name: "", content: []});
    const [currOpt, setCurrOpt] = useState("");
    const [orders, setOrder] = useState([]);
    const [drink, setDrink] = useState({cap:100, contains:{}, sugar: 100, id: 0});
    const [currNum, setCurrNum] = useState(0);

    useEffect(() => {
        // console.log(currCat);
        // console.log(orders);
        // console.log(JSON.stringify(orders[orders.length -1]));
    }, [currCat, orders]);

    useEffect(() => {
        if (!drink.contains[currOpt]){
            setCurrNum(0);
        } else {
            setCurrNum(drink.contains[currOpt]);
        }
    }, [currOpt]);

    useEffect(() => {
        setCurrNum(0);
        setCurrOpt("");
    }, [currCat]);

    function padSetNum(x){
        if (!currOpt){
            return;
        } else if (x === -1 && currNum<10){
            setCurrNum(0);
        } else if (x === -1){
            setCurrNum(Number(String(currNum).substring(0, String(currNum).length - 1)));
        } else if (currNum === 0){
            setCurrNum(x);
        } else if (Number("" + currNum + x) < drink.cap){
            setCurrNum(Number("" + currNum + x));
        }
    }

    function addElement(name){
        if (name === "Sugar" && Number(currNum) < 200){
            setDrink({cap: drink.cap, contains: drink.contains, sugar: currNum, id: drink.id});
            return;
        }
        if (!name){return;}
        let newCap;
        if (drink.contains.hasOwnProperty(name)){
            newCap = drink.cap + drink.contains[name] - currNum;
        } else {
            newCap = drink.cap - currNum;
        }
        if (newCap < 0){
            console.log("Too much");
            return;
        }
        let tempContains = drink.contains;
        if (currNum === 0){
            delete tempContains[name];
        } else {
            tempContains[name] = currNum;
        }
        setDrink({cap: newCap, contains: tempContains, sugar:100, id: drink.id});
        console.log(JSON.stringify(drink));
    } 

    return (
        <div className="general-box pone-box">
            <div className="cols col1">
                {categories.map((catObj, index) => (
                    <Category 
                        catObj = {catObj}
                        currentCat = {currCat.name}
                        clickFunc = {setCurrCat}
                        key = {index}
                    />
                ))}
            </div>
            <div className="cols col2">
                {currCat.content.map((optName, index) => (
                    <Option 
                        optName = {optName}
                        currOpt = {currOpt}
                        clickFunc = {setCurrOpt}
                        key = {index}
                    />
                ))}
            </div>
            <div className="col3">   
                <div className="add-button">{JSON.stringify(drink)}</div>
                <div className="add-button">{JSON.stringify(orders)}</div>
                <div className="add-button">
                    <div className="drink-visual">
                        {Object.keys(drink.contains).map((key, index) => (
                            <svg width="100px" height={drink.contains[key]} key={index}>
                                <rect width="100px" height={drink.contains[key]} fill="blue" />
                            </svg>
                        ))}
                    </div>
                </div>
                <div className="add-button">
                    <input type="range" id="points" name="points" min="0" max="100" value={currNum}/>
                </div>
            </div>
            <div className="col4">
                <Numpad optName={currOpt} val={currNum} addFunc={addElement} setNumFunc={padSetNum}/>
                <div 
                    className="add-button clickable noselect" 
                    onClick={()=>{setOrder([...orders, drink]); setDrink({cap:100, contains:{}, sugar: 100, id: drink.id + 1})}}>
                    Add drink to order
                </div>
            </div>
        </div>
    );
}