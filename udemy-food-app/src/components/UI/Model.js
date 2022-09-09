import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClose}></div>
    )
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}
const poratlElement = document.getElementById("overlay-root")

const Model = (props) => {
    return (
        <React.Fragment>
            { ReactDOM.createPortal(
            <Backdrop onClose={props.onBackdropClose}/>, poratlElement
            )}
            {ReactDOM.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>, poratlElement
            )}
        </React.Fragment>
    )
}

export default Model;