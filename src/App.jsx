//Module Imports 
import {Routes, Route} from "react-router"
import { useState,useEffect,useRef,useContext } from "react";




//Component Imports 
import Navbar from "./components/ui/custom/Navbar.jsx";


//Page imports 
import Home from "./pages/Home.jsx"
import Search from "./pages/Search.jsx";
import RecipeItem from "./pages/RecipeItem.jsx";
import RecipeRandom from "./pages/RecipeRandom.jsx"


//Data imports
import { navbarLinks } from "./data/navbarLinks.js";

//Context Imports
import {RecipeContext} from "./context/RecipeContext.js";



//Other Imports
import {getMeals} from "./util/api.js"


export default function App() {

 

const[recipes,setRecipes] = useState([])



return (
  <>
    <Navbar links={navbarLinks}></Navbar>
    <RecipeContext.Provider value={{ recipes, setRecipes }}>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              mainText="Explore Countless Recipes"
              subText="With listed ingredients and detailed instructions, leaving no room for questions."
              delimiterImgSrc="./fork.png"
            ></Home>
          }
        ></Route>
        <Route path="/search-recipes" element={<Search></Search>}></Route>
        <Route
          path="/recipe/:idMeal"
          element={<RecipeItem></RecipeItem>}
        ></Route>
        <Route
          path="/recipe/random"
          element={<RecipeRandom></RecipeRandom>}
        ></Route>
      </Routes>
    </RecipeContext.Provider>
  </>
);
  
}
