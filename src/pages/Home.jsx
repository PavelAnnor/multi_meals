
import { MainAndSubTextSection } from "../components/ui/custom/MainAndSubTextSection";
import ImageDelimiter from "../components/ui/custom/ImageDelimiter";

export default function Home({mainText,subText, delimiterImgSrc}){


    return (
      <main className="border-red-400 border-4 w-95/100 m-auto mt-10 rounded-4xl flex flex-col ">
        <MainAndSubTextSection
          mainText={mainText}
          subText={subText}
        ></MainAndSubTextSection>
        <ImageDelimiter delimiterImgSrc={delimiterImgSrc} num={3}></ImageDelimiter>

    
      </main>
    );
}


