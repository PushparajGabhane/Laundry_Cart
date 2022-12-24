import "../styles/orderList.css";
import search from "../asset/SidebarImages/search.svg";

function OrderList() {

    return (
        <div className="order-section">
            <div className="search">
                <img src={search} alt="search" /> <input type={"text"} />
            </div>

            <div className="tc">
                <h6>No Orders Available</h6>
                <button className='create'>Create</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Order Date & Time</th>
                        <th>Store Location</th>
                        <th>City</th>
                        <th>Store Number</th>
                        <th>Total Items</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Cancel</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td><button className="cancel"
                            onClick={() => { alert("Your order is cancelled") }}
                        >Cancel</button></td>
                        <td>10</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default OrderList;