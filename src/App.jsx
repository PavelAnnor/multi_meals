//Module Imports 




//Component Imports 
import Navbar from "./components/ui/custom/Navbar.jsx";


//Data imports
import { navbarLinks } from "./data/navbarLinks.js";



//Other Imports
import fetchData from "./util/api.js"


await fetchData();
export default function App() {

 




return (
  <>
    <Navbar links = {navbarLinks}></Navbar>
  </>
);
  
}
