import { MainAndSubTextSection } from "../components/ui/custom/MainAndSubTextSection.jsx";
import SearchBar from "../components/ui/custom/Searchbar.jsx";
import FoodCardItem from "../components/ui/custom/FoodCardItem.jsx";
import FoodCardItemGrid from "../components/ui/custom/FoodCardItemGrid.jsx";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext.js"


import { pullOutIngredients } from "../util/util.js";


export default function Search(){

    const {recipes,setRecipes} = useContext(RecipeContext);
    
   
 

    return (
      <main>
        <MainAndSubTextSection
          subText=""
          mainText="Search for Recipes"
          margin={4}
        ></MainAndSubTextSection>
        <SearchBar></SearchBar>
        {recipes &&
        <FoodCardItemGrid>
            {recipes.map((r) => (
              <FoodCardItem
                key={r.idMeal}
                image={r.strMealThumb}
                name={r.strMeal}
                country={r.strCountry}
                video={r.strYoutube}
                ingredients = {pullOutIngredients(r)}
                idMeal={r.idMeal}
              ></FoodCardItem>
            ))}
        </FoodCardItemGrid>
        }
        {!recipes && <h1 className="text-5xl text-center mt-10">No Results found... </h1>}
      </main>
    );
}