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
    const [current, setCurrent] = useState({cat: "", content: [], opt:""});
    const [orders, setOrder] = useState([]);
    const [drink, setDrink] = useState({cap:100, contains:{}, sugar: 100, id: 0});

    useEffect(() => {
        console.log(current);
        console.log(orders);
        // console.log(JSON.stringify(orders[orders.length -1]));
    }, [current, orders]);

    function addElement(name, percent){
        if (name === "Sugar" && Number(percent) < 200){
            setDrink({cap: drink.cap, contains: drink.contains, sugar: percent});
            return;
        }
        if (!name){return;}
        let newCap;
        if (drink.contains.hasOwnProperty(name)){
            newCap = drink.cap + Number(drink.contains[name]) - Number(percent);
        } else {
            newCap = drink.cap - Number(percent);
        }
        if (newCap < 0){
            console.log("Too much");
            return;
        }
        let tempContains = drink.contains;
        if (Number(percent) === 0){
            delete tempContains[name];
        } else {
            tempContains[name] = percent;
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
                        currentCat = {current.cat}
                        clickFunc = {setCurrent}
                        key = {index}
                    />
                ))}
            </div>
            <div className="cols col2">
                {current.content.map((optName, index) => (
                    <Option 
                        optName = {optName}
                        current = {current}
                        clickFunc = {setCurrent}
                        key = {index}
                    />
                ))}
            </div>
            <div className="col3">   
                <div className="add-button">{JSON.stringify(drink)}</div>
                <div className="add-button">{JSON.stringify(orders)}</div>
            </div>
            <div className="col4">
                <Numpad optName={current.opt} val={drink.contains[current.opt]} addFunc={addElement}/>
                <div 
                    className="add-button clickable noselect" 
                    onClick={()=>{setOrder([...orders, drink]); setDrink({cap:100, contains:{}, sugar: 100, id: drink.id + 1})}}>
                    Add drink to order
                </div>
            </div>
        </div>
    );
}