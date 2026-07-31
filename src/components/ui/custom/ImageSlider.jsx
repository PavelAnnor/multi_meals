export default function ImgageSlider({imgs}){


    const imgsArr = [
      "https://images.pexels.com/photos/31393431/pexels-photo-31393431.jpeg",
    ];

    return (
      <>
        <div className="w-full aspect-15/3  flex justify-evenly relative overflow-hidden gap-5 bor">
          <img
            className="h-full w-[27%] rounded-4xl"
            src="https://images.pexels.com/photos/31393431/pexels-photo-31393431.jpeg"
          ></img>
          <img
            className="h-full w-[27%] rounded-4xl"
            src="https://images.pexels.com/photos/15062601/pexels-photo-15062601.jpeg"
          ></img>
          <img
            className="h-full w-[27%] rounded-4xl"
            src="https://images.pexels.com/photos/342020/pexels-photo-342020.jpeg"
          ></img>
        </div>
        <br></br>

        <div className="w-full aspect-15/3  flex justify-center relative overflow-hidden gap-5 mt-5">
          <img
            className="h-full w-[27%] fadeImgageLeft rounded-4xl"
            src="https://images.pexels.com/photos/31393431/pexels-photo-31393431.jpeg"
          ></img>
          <img
            className="h-full w-[27%] rounded-4xl"
            src="https://images.pexels.com/photos/20422171/pexels-photo-20422171.jpeg"
          ></img>
          <img
            className="h-full w-[27%] rounded-4xl"
            src="https://images.pexels.com/photos/20446397/pexels-photo-20446397.jpeg"
          ></img>
          <img
            className="h-full w-[27%] fadeImgageRight rounded-4xl"
            src="https://images.pexels.com/photos/31596394/pexels-photo-31596394.jpeg"
          ></img>
        </div>
      </>
    );



}