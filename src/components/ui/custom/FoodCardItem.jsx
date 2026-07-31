import {Link } from "react-router"
import {useRef} from "react"
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
      <article className="w-[100%] border-[#eae9e9] border bg-white flex flex-col p-4 rounded-3xl">
        <div
          className="flex relative"
          onMouseEnter={(e) => handleMouseEnter(e)}
          onMouseLeave={(e) => handleMouseLeave(e)}
        >
          <img
            ref={imageRef}
            src={image}
            className="w-full aspect-square border rounded-4xl ml-auto mr-auto border border-[#505050]"
          ></img>
          <div
            ref={subCardRef}
            className="h-0 w-full absolute top-0 left-0  bg-[#f3f0f079] rounded-4xl overflow-scroll   "
          >
            <p className="p-1  h-[10%] w-full text-center text-[#0a0ad1] underline">
              Ingredients
            </p>
            <Ingredients
              ingredients={ingredients}
              idMeal={idMeal}
            ></Ingredients>
          </div>
        </div>

        <p className="p-2 border mt-2 "> {name}</p>
        <p className="p-2 border mt-2">Country: {country}</p>
        <Link to={video} target="_blank">
          <p className="p-2 border mt-2">Video Recipe</p>
        </Link>
        <Link to={`/recipe/${idMeal}`} target="_blank">
          <p className="p-2 border mt-2">Detailed Recipe</p>
        </Link>
      </article>
    );
}


function Ingredients({ingredients,idMeal}){

    return ingredients.map((i) => 
      {
      return( <p key = {idMeal+i} className="p-1  h-[10%] w-full text-center">{i}</p>)
     }
    );



}

