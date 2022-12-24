import Footer from "./footer";
import Header from "./header";
import OrderList from "./orderList";
import SideBar from "./sidebar";

export default function Profile(props) {
console.log(props.name);
    return (<>
        <Header />
        <div>
            <SideBar />
            <OrderList />
        </div>
        <div>
            <Footer />
        </div>
    </>)
};