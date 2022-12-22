import React, { useEffect } from "react";
import { useState } from "react";
import Footer from "./footer";
import Header from "./header";
import OrderList from "./orderList";
import SideBar from "./sidebar";

function Home() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('localhost:4000/orders').then(res => res.json)
            .then(order => {
                setData(order);
                return order
            })
    }
        , [])


    return (
        <>
            <Header />
            <SideBar />
            <OrderList orders={data} />
            <Footer />
        </>
    )
}
export default Home;