import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
    return (
        <React.Fragment>
            <h1>Products page</h1>
            <ul>
                <li>
                    <Link to="/products/p1">product 1 </Link>
                </li>
                <li>
                    <Link to="/products/p2">product 2 </Link>
                </li>
                <li>
                    <Link to="/products/p3">product 3 </Link>
                </li>
            </ul>
        </React.Fragment>
    )
};

export default Products;