export default function RecipeItemIngredients({ingredients}){
    console.log(ingredients)
    return (
      <section className="border-blue-400 w-full border mt-5">
        <h2 className="text-5xl mb-2">Ingredients</h2>
        <ul>
          {ingredients.map((i) => (
            <li>
              <p>{i}</p>
            </li>
          ))}
        </ul>
      </section>
    );
}