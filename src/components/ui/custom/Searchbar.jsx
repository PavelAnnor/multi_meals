import { Button } from "../button.jsx"
import { Search } from "lucide-react";
import { useContext,useRef } from "react";
import { RecipeContext } from "../../../context/RecipeContext.js";
import fetchData from "../../../util/api.js";

export default function SearchBar(){


  const {recipes,setRecipes} = useContext(RecipeContext);

  const searchBarRef = useRef()
  


    async function handleSearch(e){
        e.preventDefault()
        const x =  await fetchData(searchBarRef.current.value)
        setRecipes(x.meals)
    }

   
    return (
      
      <form className=" text-center w-[50%] m-auto" >
        <div className="flex h-15 border border-black  rounded-4xl pl-2 m-auto">
          <Search className="h-full"></Search>
          <input
            type="text"
            className="h-full w-full rounded-4xl pl-3 outline-0 border-l-0"
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