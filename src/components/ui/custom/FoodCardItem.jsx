import {Link } from "react-router"
import {useRef} from "react"
import { Button } from "../button"
export default function FoodCardItem({idMeal,image,name,country,video,ingredients}){


   const imageRef = useRef()
   const subCardRef = useRef()

    function handleMouseEnter(e) {
        e.preventDefault()
      subCardRef.current.classList.add("h-full", "p-2");
    }

    function handleMouseLeave(e) {
        e.preventDefault();
      subCardRef.current.classList.remove("h-full", "p-2");
    }


   

    return (
      <article className="w-[100%] border-[#d8d8d8] border bg-white flex flex-col p-6 rounded-3xl">
        <div
          className="flex relative"
          onMouseEnter={(e) => handleMouseEnter(e)}
          onMouseLeave={(e) => handleMouseLeave(e)}
        >
          <img
            ref={imageRef}
            src={image}
            className="w-full aspect-square border-2 rounded-4xl ml-auto mr-auto border border-[#3d023a]"
          ></img>
          <div
            ref={subCardRef}
            className="h-0 w-full absolute top-0 left-0  bg-[#040404af] rounded-4xl overflow-scroll   "
          >
            <p className="p-1  h-[10%] w-full text-center text-[#ad07ca] underline">
              Ingredients
            </p>
            <Ingredients
              ingredients={ingredients}
              idMeal={idMeal}
            ></Ingredients>
          </div>
        </div>

        <p className="p-1 pt-2 "> {name}</p>
        <p className="p-1  pt-1">{country}</p>
        <div className=" w-full  flex gap-2 pt-1 flex-wrap">
          <Link to={video} target="_blank">
            <Button size="sm" className>Video Recipe
            </Button>
          </Link>
          <Link to={`/recipe/${idMeal}`} target="_blank">
            <Button size="sm" className="text-black bg-[#81DADA]">
          
              Detailed Recipe
            </Button>
          </Link>
        </div>
      </article>
    );
}


function Ingredients({ingredients,idMeal}){

    return ingredients.map((i) => 
      {
      return (
        <p
          key={idMeal + i}
          className="p-1  h-[10%] w-full text-center text-white"
        >
          {i}
        </p>
      );
     }
    );



}

