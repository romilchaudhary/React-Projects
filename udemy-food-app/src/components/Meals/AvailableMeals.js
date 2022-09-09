import React from "react";

import classes from "./AvailableMeals.module.css";
import { DUMMY_MEALS } from './dummy-meals';
import MealItem from "./MealsItem/MealItem";
import Card from "../UI/Card";
import useFetch from "../hooks/use-fetch";

const mealsUrl = "https://jsonplaceholder.typicode.com/users";
const AvailableMeals = () => {    
    const mealsData = useFetch(mealsUrl);
    
    if(mealsData.isLoading) {
        return (
            <section className={classes.isLoadingMeals}>Loading..........</section>
        )
    }
    if (mealsData.errorMessage) {
        return (
            <section className={classes.mealsError}>{mealsData.errorMessage}</section>
        )
    }
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {
                        DUMMY_MEALS.map((meal) => {
                            return <MealItem
                                key={meal.id}
                                id={meal.id}
                                name={meal.name}
                                description={meal.description}
                                price={meal.price}
                            />
                        })
                    }
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;