import {Button} from "../../ui/button.jsx"
export default function RecipeItemIngredients({ingredients}){
    console.log(ingredients)
    return (
      <section className="border-blue-400 w-full  mt-5 ">
        <h2 className="text-5xl mb-2 border-b-2 flex p-2 border-[#b1b0b0]">Ingredients</h2>
        <ul className="grid grid-cols-6 gap-1 mt-5">
          {ingredients.map((i) => (
            <li>
              <Button className="col-span-1 w-full bg-[#AD8DCE] text-white">
                {i}
              </Button>
            </li>
          ))}
        </ul>
      </section>
    );
}