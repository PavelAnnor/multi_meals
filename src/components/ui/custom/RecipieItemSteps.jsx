
export default function RecipeItemSteps({steps}){

    console.log(steps)

    return (
      <section className="border-blue-400 w-full mt-10">
        <h2 className="text-5xl mb-2 border-b-2 flex p-2 border-[#b1b0b0]">Steps</h2>
        <p className="text-xl p-2">{steps}</p>
      </section>
    );



}