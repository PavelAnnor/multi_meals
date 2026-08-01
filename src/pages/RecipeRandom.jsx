
import RecipeItemHeader from "../components/ui/custom/RecipieItemHeader.jsx";
import RecipeItemIngredients from "../components/ui/custom/RecipeItemIngredients.jsx";
import RecipeItemSteps from "../components/ui/custom/RecipieItemSteps.jsx";

import { useEffect ,useState} from "react";




import { getRandomMeal } from "../util/api.js";

import { pullOutIngredients,pullOutIngredientAmounts } from "../util/util.js";

export default function RecipeRandom(){

    const [meal,setMeal] = useState({})

    useEffect(()=>{


        async function getData(){


            try {
                const x = await getRandomMeal()
                setMeal(x.meals[0])
                
            } catch (error) {

                console.log(error)
                
            }



        } getData()
    },[])






    return (
      <main className="w-85/100  border-red-600 m-auto p-2 mt-6 ">
        <RecipeItemHeader
          image={meal.strMealThumb}
          name={meal.strMeal}
          category={meal.strCategory}
        ></RecipeItemHeader>
        <RecipeItemIngredients
          ingredients={pullOutIngredients(meal)}
          amounts={pullOutIngredientAmounts(meal)}
        ></RecipeItemIngredients>
        <RecipeItemSteps steps={meal.strInstructions}></RecipeItemSteps>
      </main>
    );
}