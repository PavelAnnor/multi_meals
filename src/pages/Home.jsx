


export default function Home({mainText,subText, delimiterImgSrc}){


    return (
      <main className="border-red-400 border-4 w-95/100 h-72 m-auto mt-10 rounded-4xl flex flex-col ">
        <TextSection mainText={mainText} subText={subText}></TextSection>
        <div className="flex border-amber-300 border-4 h-11 w-2/10 ml-auto mr-auto justify-evenly">
          <img src={delimiterImgSrc}></img>
          <img src={delimiterImgSrc}></img>
          <img src={delimiterImgSrc}></img>
        </div>
      </main>
    );
}


function TextSection({mainText,subText}){
    return (
      <div className="border-green-300 border-4 text-center flex flex-col p-6 gap-5 figtree-font w-full">
        <h2 className="text-6xl">{mainText}</h2>
        <p className="text-2xl">{subText}</p>
      </div>
    );
}