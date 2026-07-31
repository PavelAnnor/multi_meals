
export default function ImageDelimiter({num, delimiterImgSrc}){


    const images = []
    for(let i =0; i<num;i++){

        images.push(<img className =""src={delimiterImgSrc} key = {`${i}+${delimiterImgSrc}`}></img>);

    }

    return (
      <div className="flex border-amber-300 h-14 ml-auto mr-auto justify-evenly gap-5 mt-5 mb-2 ">
       {images}
      </div>
    );





}

