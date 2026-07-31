//Module Imports 
import {Routes, Route} from "react-router"
import { useState,useEffect,useRef,useContext } from "react";




//Component Imports 
import Navbar from "./components/ui/custom/Navbar.jsx";


//Page imports 
import Home from "./pages/Home.jsx"
import Search from "./pages/Search.jsx";


//Data imports
import { navbarLinks } from "./data/navbarLinks.js";

//Context Imports
import {RecipeContext} from "./context/RecipeContext.js";



//Other Imports
import fetchData from "./util/api.js"


export default function App() {

 

const[recipes,setRecipes] = useState([])



return (

  
  <RecipeContext.Provider value = {{recipes,setRecipes}}>
    <Navbar links={navbarLinks}></Navbar>
    <Routes>
      <Route
        path="/"
        element={
          <Home
            mainText="Explore Countless Recipes"
            subText="Hundreds of Recipies all with ingredients, detailed instructions and more"
            delimiterImgSrc="./fork.png"
          ></Home>
        }
      ></Route>
      <Route path="/search-recipes" element={<Search></Search>}></Route>
    </Routes>
  </RecipeContext.Provider>
);
  
}
