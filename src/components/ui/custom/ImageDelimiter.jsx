
export default function ImageDelimiter({num, delimiterImgSrc}){


    const images = []
    for(let i =0; i<num;i++){

        images.push(<img src={delimiterImgSrc} key = {`${i}+${delimiterImgSrc}`}></img>);

    }

    return (
      <div className="flex border-amber-300 border h-11  ml-auto mr-auto justify-evenly gap-5 ">
       {images}
      </div>
    );





}

