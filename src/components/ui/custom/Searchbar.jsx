import { Button } from "../button.jsx"
import { Search } from "lucide-react";
export default function SearchBar(){



    async function handleSearch(e){

        e.preventDefault()
        console.log("Works")

    }
    return (
      <form className=" text-center w-[50%] m-auto">
        <div className="flex h-15 border border-black  rounded-4xl pl-2 m-auto">
          <Search className="h-full"></Search>
          <input
            type="text"
            className="h-full w-full rounded-4xl pl-3 outline-0 border-l-0"
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