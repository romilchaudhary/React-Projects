import { useEffect, useState } from "react";
import useCounter from "../hooks/use-counter";
import Card from "./Card";

const Forw = () => {
    const counter = useCounter();
    return <Card>for: {counter}</Card>
}

export default Forw;