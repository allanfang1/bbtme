import { React, useState, useEffect } from "react";
import Category from "./components/Category";
import Option from "./components/Option";
import Numpad from "./components/Numpad";
import { redirect } from "react-router-dom";

export default function PageOne() {
    const colors = ["#FF0000", "#3C00FF", "#00DEFF", "#09FF00", "#FFF700", "#FFA200", "#B300FF", "#00FF91", "#FF00DE",]
    const categories = [
        { name: "Base", imglink: "/media/green-tea.png", content: ["Brown Sugar Milk", "Rose Oolong", "Chai", "Passionfruit Green Tea"] },
        { name: "Topping", imglink: "/media/tapioca-pearls.png", content: ["Tapioca", "Grass Jelly", "Sago", "Pudding", "Lychee Jelly"] },
        { name: "Tuning", imglink: "/media/sugar-cube.png", content: ["Sugar", "Ice"] },
        { name: "Love", imglink: "/media/love.png", content: ["Yes"] },
    ]
    const [currCat, setCurrCat] = useState({ name: "", content: [] });
    const [currOpt, setCurrOpt] = useState("");
    const [orders, setOrder] = useState([]);
    const [drink, setDrink] = useState({ cap: 100, contains: {}, sugar: 100, id: 0 });
    const [currNum, setCurrNum] = useState(0);
    const [color, setColor] = useState("red")

    useEffect(() => {
        // console.log(currCat);
        // console.log(orders);
        // console.log(JSON.stringify(orders[orders.length -1]));
        // console.log(JSON.stringify(drink));
    }, [drink]);

    useEffect(() => {
        if (!drink.contains[currOpt]) {
            setCurrNum(0);
        } else {
            setCurrNum(drink.contains[currOpt]);
        }
    }, [currOpt]);

    useEffect(() => {
        setCurrNum(0);
        setCurrOpt("");
    }, [currCat]);

    useEffect(() => {
        if (currOpt) {
            addElement(currOpt, currNum)
        }
    }, [currNum]);

    useEffect(() => {
        setCurrNum(0);
        setCurrOpt("");
    }, [currCat]);

    function handleSlider(x) {
        let temp = 0;
        if (drink.contains[currOpt]) {
            temp = Number(drink.contains[currOpt])
        }
        let temp2= Number(drink.cap) + temp;
        if (x > Number(drink.cap) + temp || !currOpt) {
            return;
        }
        // console.log(x > temp2)
        // console.log("slider = " + x);
        // console.log("cap is = " + drink.cap)
        // console.log("existing + cap =" + temp2);
        setCurrNum(x);
        setTimeout(100);
    }

    function bob(){
        return "red";
    }
    function chooseColor() {
        if (color === "red") {
            setColor("blue");
        } else if (color === "blue") {
            setColor("green")
        } else if (color === "green") {
            setColor("red")
        }
        return color;
    }

    function padSetNum(x) {
        if (!currOpt) {
            return;
        }
        let newVal;
        if (x === -1 && currNum < 10) {
            newVal = 0;
        } else if (x === -1) {
            newVal = Number(String(currNum).substring(0, String(currNum).length - 1));
        } else if (currNum === 0) {
            newVal = x;
        } else if (Number("" + currNum + x) < drink.cap) {
            newVal = Number("" + currNum + x);
        } else {
            return;
        }
        setCurrNum(newVal);
    }

    function addElement(name, x) {
        if (name === "Sugar" && Number(x) < 200) {
            setDrink({ cap: drink.cap, contains: drink.contains, sugar: x, id: drink.id });
            return;
        }
        if (!name) { return; }
        let tempContains = drink.contains;
        if (Number(x) === 0) {
            delete tempContains[name];
        } else {
            tempContains[name] = x;
        }
        let newCap = 100;
        Object.keys(drink.contains).map((key) => {
            newCap -= drink.contains[key];
        })
        //console.log(newCap + "boop");
        setDrink({ cap: newCap, contains: tempContains, sugar: 100, id: drink.id });
        //console.log(JSON.stringify(drink));
    }

    return (
        <div className="general-box pone-box">
            <div className="cols col1">
                {categories.map((catObj, index) => (
                    <Category
                        catObj={catObj}
                        currentCat={currCat.name}
                        clickFunc={setCurrCat}
                        key={index}
                    />
                ))}
            </div>
            <div className="cols col2">
                {currCat.content.map((optName, index) => (
                    <Option
                        optName={optName}
                        currOpt={currOpt}
                        clickFunc={setCurrOpt}
                        key={index}
                    />
                ))}
            </div>
            <div className="col3">
                
                <div className="add-button">
                    <div className="drink-visual">
                        {Object.keys(drink.contains).map((key, index) => (
                            <svg width="100px" height={drink.contains[key]*2} key={index}>
                                <rect width="100px" height={drink.contains[key]*2} fill={colors[index]} />
                            </svg>
                        ))}
                    </div>
                </div>
                <div className="add-button">
                    <input type="range" min="0" max="100" value={currNum} onChange={(e) => handleSlider(e.target.value)} />
                </div>
                <div className="add-button">{JSON.stringify(drink)}</div>
                <div className="add-button">{JSON.stringify(orders)}</div>
            </div>
            <div className="col4">
                <Numpad optName={currOpt} val={currNum} addFunc={addElement} setNumFunc={padSetNum} />
                <div
                    className="add-button clickable noselect"
                    onClick={() => { setOrder([...orders, drink]); setDrink({ cap: 100, contains: {}, sugar: 100, id: drink.id + 1 }) }}>
                    Add drink to order
                </div>
            </div>
        </div>
    );
}