import { React, useState } from "react"

const Order = ({ ordObj, key }) => {
    const [hidden, setHidden] = useState("");
    function hideDiv() {
        //var x = document.getElementsByClassName("order-cell");
        // document.getElementById('hideDiv').style.display='none';
        setHidden("hideDiv");
    }
    return (
        <div className="order-cell" id={hidden}>
            <div className="order-cell">{"Order ID: " + ordObj.orderID}</div>
            <div className="order-cell">{ordObj.time}</div>
            <br></br>
            <div>{ordObj.size}</div>
            <div>{ordObj.base}</div>
            <div>{ordObj.topping[0]} {ordObj.topping[1] + "%"}</div>
            <div>{"Sugar: " + ordObj.sugar + "%"}</div>
            <div>{"Ice: " + ordObj.ice + "%"}</div>
            <div onClick={hideDiv} className="resolve-cell">
            RESOLVE
            </div>
        </div>
    );
}

export default Order;

