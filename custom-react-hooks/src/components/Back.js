import React, { useEffect, useState } from "react";
import useCounter from "../hooks/use-counter";
import Card from "./Card";

const Back = () => {
    const counter = useCounter(false);

    return (
        <Card>Back: {counter}</Card>
    )
}

export default Back;