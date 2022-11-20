import { React } from "react"

const Order = ({ ordObj, key }) => {
    return (
        <div className="order-cell">
            <div>{"Order ID: " + ordObj.orderID}</div>
            <div>{ordObj.time}</div>
            <br></br>
            <div>{ordObj.size}</div>
            <div>{ordObj.base}</div>
            <div>{ordObj.topping[0]} {ordObj.topping[1] + "%"}</div>
            <div>{"Sugar: " + ordObj.sugar + "%"}</div>
            <div>{"Ice: " + ordObj.ice+"%"}</div>
        </div>
    );
}

export default Order;

