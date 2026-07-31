import { MainAndSubTextSection } from "../components/ui/custom/MainAndSubTextSection";
import SearchBar from "../components/ui/custom/Searchbar";

export default function Search(){



    return (
      <main>
        <MainAndSubTextSection
          subText="And Filter by Time, Ingredients, Country etc."
          mainText="Search for Recipies"
          margin={4}
        ></MainAndSubTextSection>
        <SearchBar></SearchBar>
      </main>
    );
}