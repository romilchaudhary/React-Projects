import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
    return (
        <header className={classes.header}>
                <div className={classes.logo}>React Routing</div>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink activeClassName={classes.active} to="/quotes">All Quotes</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={classes.active} to="/new-quote">New Quote</NavLink>
                        </li>
                    </ul>
                </nav>
        </header>
    )
};

export default MainNavigation;