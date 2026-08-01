export default function RecipeItemHeader({image,name,category}){




    return (
      <section className="border-blue-400 w-full flex items-center">
        <img
          src={image}
          className="w-30/100 aspect-square rounded-3xl border border-black  "
        ></img>
        <div className=" border-black  w-full ml-4">
          <h2 className="text-7xl  mb-2 p-2">{name}</h2>
          <p className="text-3xl text-gray-600 p-2">{category}</p>
        </div>
      </section>
    );


}