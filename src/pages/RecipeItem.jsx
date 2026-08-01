import { useParams } from "react-router"
import {useState, useContext,useEffect} from "react"
import { RecipeContext } from "../context/RecipeContext";

import {getMealByID} from "../util/api.js"

import { pullOutIngredientAmounts,pullOutIngredients } from "../util/util.js";

import RecipeItemHeader from "../components/ui/custom/RecipieItemHeader.jsx"
import RecipeItemIngredients from "../components/ui/custom/RecipeItemIngredients.jsx";
import RecipeItemSteps from "../components/ui/custom/RecipieItemSteps.jsx";



export default function RecipeItem(){
    let params = useParams();
    const [meal,setMeal] = useState({})

    useEffect(
        () => {
      async function getMeal() {
        const x = await getMealByID(Number(params.idMeal));
        setMeal(x.meals[0])
      } getMeal();
    }, []);
    


  

    return (
      <main className="w-8/10 border border-red-600 m-auto p-2 mt-6 ">
        <RecipeItemHeader
          image={meal.strMealThumb}
          name={meal.strMeal}
          category={meal.strCategory}
        ></RecipeItemHeader>
        <RecipeItemIngredients
          ingredients={pullOutIngredients(meal)}
        ></RecipeItemIngredients>
        <RecipeItemSteps steps={meal.strInstructions}></RecipeItemSteps>
      </main>
    );
}