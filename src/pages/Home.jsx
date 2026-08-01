
import { MainAndSubTextSection } from "../components/ui/custom/MainAndSubTextSection";
import ImageDelimiter from "../components/ui/custom/ImageDelimiter";
import ImgageSlider from "../components/ui/custom/ImageSlider";

export default function Home({mainText,subText, delimiterImgSrc}){


    return (
      <main className="border-gray-300  border-1 w-90/100 m-auto mt-10 mb-0 rounded-4xl flex flex-col bg-[#ffffff] pt-10 items-center">
        <ImageDelimiter
          delimiterImgSrc={delimiterImgSrc}
          num={3}
        ></ImageDelimiter>
        
        <MainAndSubTextSection
          mainText={mainText}
          subText={subText}
        ></MainAndSubTextSection>

        <img src="./burger2.png" className=" border-red-900 w-9/10"></img>

       
      </main>
    );
}


