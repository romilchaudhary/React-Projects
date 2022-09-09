import React, { useRef } from "react";
import classes from "./AddMovie.module.css";

const NewMovie = (props) => {
    const titleRef = useRef('');
    const openingTextRef = useRef('');
    const releaseDateRef = useRef('');

    const NewMovieSubmitHandler = (event) => {
        console.log("new movie handler")
        event.preventDefault();
        const title = titleRef.current.value;
        const openingText = openingTextRef.current.value;
        const releaseDate = releaseDateRef.current.value;
        const newMovie = {
            title: title,
            openingText: openingText,
            releaseDate: releaseDate
        }
        props.onAddMovie(newMovie);
    }
    return (
        <React.Fragment>
            <form onSubmit={NewMovieSubmitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" ref={titleRef} id="title" placeholder="Enter Title" />
                </div>
                <div className={classes.control}>
                    <label htmlFor='opening-text'>Opening Text</label>
                    <textarea rows='5' id='opening-text' ref={openingTextRef}></textarea>
                </div>
                <div className={classes.control}>
                    <label htmlFor='date'>Release Date</label>
                    <input type='date' id='date' ref={releaseDateRef} />
                </div>
                <button>Add Movie</button>
            </form>
        </React.Fragment>
    )
}

export default NewMovie;