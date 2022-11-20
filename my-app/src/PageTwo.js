import { React, useState, useEffect } from "react";
import Order from "./components/Order.js";
import Category from "./components/Order.js";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function PageTwo() {
    const orders = [
        { orderID: "1", time: "/media/allan.png", size: "Medium", base: "Passionfruit Green Tea", topping: ["Tapioca", 20], sugar: 34, ice: 20 },
        { orderID: "2", time: "/media/allan.png", size: "Large", base: "Passionfruit Green Tea", topping: ["Tapioca", 20], sugar: 34, ice: 20 },
        { orderID: "3", time: "/media/allan.png", size: "Small", base: "Passionfruit Green Tea", topping: ["Tapioca", 20], sugar: 34, ice: 20 },
        { orderID: "4", time: "/media/allan.png", size: "Small", base: "Passionfruit Green Tea", topping: ["Tapioca", 20], sugar: 34, ice: 20 },
        { orderID: "5", time: "/media/allan.png", size: "Small", base: "Passionfruit Green Tea", topping: ["Tapioca", 20], sugar: 34, ice: 20 }
    ]

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Carousel responsive={responsive} className="order-container">
            {orders.map((ordObj, index) => (
                <Order
                    ordObj={ordObj}
                    key={index}
                />
            ))}
        </Carousel>
    );
}