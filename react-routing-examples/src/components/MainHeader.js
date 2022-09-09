import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <a href="/products">Products</a>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to="/users">Users</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default MainHeader;