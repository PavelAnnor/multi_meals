import { Button } from "../button";
import "../../../styles/Navbar.css";

import { Link } from "react-router";

export default function Navbar({links}) {

    const mappedLinks = links.map(
        (l)=> <Link key= {l.text} to = {l.href}><Button className="h-12">{l.text}</Button></Link>
    )
    console.log(mappedLinks)
  return (
    <header className="w-ful h-[6rem] flex justify-between p-2 pl-10 pr-10 border-2 border-black bg-white">
      <div className="leftNavbar flex h-full items-center">
        <img src = "./ramen-bowl.svg" className="h-full"></img>
        <Link to = "/"><h2>RECIPIES</h2></Link>
      </div>
      <div className="rightNavbar flex h-full  items-center gap-2">
        {mappedLinks}
        {/* <Link></Link> */}
      </div>
    </header>
  );
}
