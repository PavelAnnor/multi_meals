import { Button } from "../button.jsx"
import { Search } from "lucide-react";
import { useContext,useRef } from "react";
import { RecipeContext } from "../../../context/RecipeContext.js";
import {getMeals} from "../../../util/api.js";

export default function SearchBar(){


  const {recipes,setRecipes} = useContext(RecipeContext);

  const searchBarRef = useRef()
  


    async function handleSearch(e){
        e.preventDefault()
        const x =  await getMeals(searchBarRef.current.value)
        setRecipes(x.meals)
    }

   
    return (
      
      <form className=" text-center w-[50%] m-auto" >
        <div className="flex h-15 border border-black  rounded-4xl pl-2 m-auto">
          <Search className="h-full w-[6%] "></Search>
          <input
            type="text"
            className="h-full w-full rounded-r-4xl pl-3 outline-0 border-l-0 bg-white"
            ref = {searchBarRef}
          ></input>
        </div>

        <Button
          type="button"
          size="lg"
          className="mt-6 h-13"
          onClick={handleSearch}
        >
          Search for Recipe
        </Button>
      </form>

      
    );
}