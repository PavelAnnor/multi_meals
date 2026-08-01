import {Button} from "../../ui/button.jsx"
export default function RecipeItemIngredients({ingredients,amounts}){


  const x = []
  for(let i in ingredients){

    x.push({name:ingredients[i],amount:amounts[i]})

  }

    return (
      <section className="border-blue-400 w-full  mt-5 ">
        <h2 className="text-5xl mb-2 border-b-2 flex p-2 border-[#b1b0b0]">
          Ingredients
        </h2>
        <ul className="grid grid-cols-6 gap-1 mt-5">
          {x.map((i) => (
            <li key={i.name +i.amount}>
              <div className="col-span-1 w-full h-13 bg-[#AD8DCE] text-white flex items-center justify-center rounded-2xl p-2 flex flex-col">
                <p className="text-xs">{i.name}</p>
                <p className="text-xs">{i.amount}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
}