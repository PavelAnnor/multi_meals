
export default function RecipeItemSteps({steps}){

    console.log(steps)

    return (
      <section className="border-blue-400 w-full border mt-5">
        <h2 className="text-5xl mb-2">Steps</h2>
        <p>{steps}</p>
      </section>
    );



}