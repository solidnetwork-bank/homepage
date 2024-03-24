import React, { useState } from "react";
import {
    EDITORIAL_HEADING,
    EDITORIAL_PATH,
    HOME_HEADING,
    HOME_PATH,
    PROPOSAL_HEADING,
    PROPOSAL_PATH
} from '../model/store-const';
import "../static/styles/menu.css";
import { PROTECTED_PAGE_ENDPOINT } from "./components-const";

export default function Menu() {

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };
    return (
        <nav>
            <div className={isActive ? "menu-icon-container" : "menu-icon-change"}
                onClick={handleToggle}>
                <div className="menu-icon-bar1"></div>
                <div className="menu-icon-bar2"></div>
                <div className="menu-icon-bar3"></div>
            </div>

            <div className={isActive ? "menu-close" : "menu-open"}>
                <span className="cross-button" onClick={handleToggle}>X</span>
                <a className="menu-item" href={HOME_PATH}>{HOME_HEADING}</a>
                <a className="menu-item" href={PROPOSAL_PATH}>{PROPOSAL_HEADING}</a>
                <a className="menu-item" href={EDITORIAL_PATH}>{EDITORIAL_HEADING}</a>
                <a className="menu-item" href={PROTECTED_PAGE_ENDPOINT}>Log In</a>
            </div>
        </nav>
    );
}
