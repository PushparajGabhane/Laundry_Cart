import "../styles/sidebar.css";
import home from "../asset/SidebarImages/home-run.svg";
import list from "../asset/SidebarImages/list.svg";
import more from "../asset/SidebarImages/more.svg";

function SideBar(){
    return(
        <>
        <div className="sidebar-section">
            <ul>
                <li className="td"><img src={home} alt="home" /></li>
                <li className="td"><img src={more} alt="more" /></li>
                <li className="td more-icon"><img src={list} alt="list" /></li>
            </ul>
        </div>
        </>
    )
}

export default SideBar;