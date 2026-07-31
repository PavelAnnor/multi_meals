export default function RecipeItemHeader({image,name,category}){




    return (
      <section className="border-blue-400 w-full flex items-center">
        <img
          src={image}
          className="w-25/100 aspect-square rounded-3xl border border-[#505050]"
        ></img>
        <div className=" border-black w-full pl-5">
          <h2 className="text-5xl mb-2">{name}</h2>
          <p className="text-2xl">{category}</p>
        </div>
      </section>
    );


}