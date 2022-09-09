import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const params = useParams();
    return (
        <React.Fragment>
            <h1>Product details</h1>
            <p>{params.prodcutId}</p>
        </React.Fragment>
    )
};

export default ProductDetails;