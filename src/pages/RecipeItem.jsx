import { useParams } from "react-router"
import {useState, useContext,useEffect} from "react"
import { RecipeContext } from "../context/RecipeContext";
import { Spinner } from "@/components/ui/spinner";

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
          try {
            async function getMeal() {
              const x = await getMealByID(Number(params.idMeal));
              if(x.meals){
                setMeal(x.meals[0]);
              }
              else
                setMeal([])
            }
            getMeal();
          } catch (error) {

    
            
          }
      
    }, []);
    

  

    return (
      <main className="w-85/100  border-red-600 m-auto p-2 mt-6 ">

        {!Array.isArray(meal) && (
          <>
            <RecipeItemHeader
              image={meal.strMealThumb}
              name={meal.strMeal}
              category={meal.strCategory}
            ></RecipeItemHeader>
            <RecipeItemIngredients
              ingredients={pullOutIngredients(meal)}
            ></RecipeItemIngredients>
            <RecipeItemSteps steps={meal.strInstructions}></RecipeItemSteps>
          </>
        )}

        {Array.isArray(meal) && (
          <div className="w-full flex flex-col items-center mt-10">
            <h1 className="text-5xl">No Recipe with that ID....</h1>
            <Spinner className= "w-[20vw] h-[20vh] mt-4"></Spinner>
          </div>
        )}
      </main>
    );
}