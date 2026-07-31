import { Button } from "../button";
import "../../../styles/Navbar.css";

import { Link } from "react-router";

export default function Navbar({links}) {

    const mappedLinks = links.map(
        (l)=> <Link key= {l.text} to = {l.href}><Button className="h-12">{l.text}</Button></Link>
    )

  return (
    <header className="w-full h-[5rem] flex  p-2 pl-10 pr-10 border-2 border-black bg-[#ffffff] sticky top-0">
      <nav
        className="flex justify-between items-center w-full "
        aria-label="Main"
      >
        <Link to="/" className="h-full">
          <div className="leftNavbar flex h-full items-center ">
            <img src="./ramen-bowl.svg" className="h-full"></img>

            <h2>RECIPIES</h2>
          </div>
        </Link>
        <div className="rightNavbar flex h-full  items-center gap-2">
          {mappedLinks}
        </div>
      </nav>
    </header>
  );
}

