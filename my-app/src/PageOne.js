import { React, useState, useEffect } from "react";
import Category from "./components/Category";
import Option from "./components/Option";

export default function PageOne(){
    const categories = [
        {name:"Base", imglink:"/media/allan.png", content:["Brown Sugar Milk", "Rose Oolong", "Chai", "Passionfruit Green Tea"]},
        {name:"Topping", imglink:"/media/allan.png", content:["Tapioca", "Grass Jelly", "Sago", "Pudding", "Lychee Jelly"]},
        {name:"Tuning", imglink:"/media/allan.png", content:["Sugar", "Ice", "Temperature"]},
        {name:"Love", imglink:"/media/allan.png", content:[]},
    ]
    const [current, setCurrent] = useState({cat: "", content: []});

    useEffect(() => {
        console.log(current);
    }, [current]);

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
            <div className="col3"></div>
            <div className="col4"></div>
        </div>
    );
}