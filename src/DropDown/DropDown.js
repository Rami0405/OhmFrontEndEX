import "./DropDown.css";
import React, { useRef, useState } from "react";
function DropDown() {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);
    return (<div className="container">
        <div className="menu-container">
            <button onClick={onClick} className="menu-trigger">

            </button>
            <nav
                ref={dropdownRef}
                className={`menu ${isActive ? "active" : "inactive"}`}
            >
                <ul>
                    <li>
                        <a href="#">Who we are</a>
                    </li>
                    <li>
                        <a href="#">Press</a>
                    </li>
                    <li>
                        <a href="#">Dealers</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>)
}
export default DropDown;