import { MainAndSubTextSection } from "../components/ui/custom/MainAndSubTextSection";
import SearchBar from "../components/ui/custom/Searchbar";
import FoodCardItem from "../components/ui/custom/FoodCardItem";
import FoodCardItemGrid from "../components/ui/custom/FoodCardItemGrid";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext.js"


import { pullOutIngredients } from "../util/util.js";


export default function Search(){

    const {recipes,setRecipes} = useContext(RecipeContext);
    
   
 

    return (
      <main>
        <MainAndSubTextSection
          subText="And Filter by Time, Ingredients, Country etc."
          mainText="Search for Recipies"
          margin={4}
        ></MainAndSubTextSection>
        <SearchBar></SearchBar>
        <FoodCardItemGrid>
          {recipes &&
            recipes.map((r) => (
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
      </main>
    );
}