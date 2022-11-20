import { React } from "react"

const Order = ({ ordObj, key }) => {
    return (
        <div class="order-container">
            <div>{ordObj.size}</div>
            <div>{ordObj.base}</div>
            <div>{ordObj.topping[0]} {ordObj.topping[1] + "%"}</div>
            <div>{"Sugar: " + ordObj.sugar + "%"}</div>
            <div>{"Ice: " + ordObj.ice+"%"}</div>
        </div>
    );
}

export default Order;

