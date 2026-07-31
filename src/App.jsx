//Module Imports 
import {Routes, Route} from "react-router"




//Component Imports 
import Navbar from "./components/ui/custom/Navbar.jsx";


//Page imports 
import Home from "./pages/Home.jsx"


//Data imports
import { navbarLinks } from "./data/navbarLinks.js";



//Other Imports
import fetchData from "./util/api.js"


await fetchData();
export default function App() {

 




return (
  <>
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
    </Routes>
  </>
);
  
}
