import { MainAndSubTextSection } from "../components/ui/custom/MainAndSubTextSection";
import SearchBar from "../components/ui/custom/Searchbar";
import FoodCardItem from "../components/ui/custom/FoodCardItem";
import FoodCardItemGrid from "../components/ui/custom/FoodCardItemGrid";

export default function Search(){



    return (
      <main>
        <MainAndSubTextSection
          subText="And Filter by Time, Ingredients, Country etc."
          mainText="Search for Recipies"
          margin={4}
        ></MainAndSubTextSection>
        <SearchBar></SearchBar>
      <FoodCardItemGrid>
        <FoodCardItem></FoodCardItem>
      </FoodCardItemGrid>
      </main>
    );
}