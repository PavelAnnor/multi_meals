import { Button } from "../button";
import "../../../styles/Navbar.css";

import { Link } from "react-router";

export default function Navbar({links}) {

    const mappedLinks = links.map((l) =>
      l.text === "Random Recipe" ? (
        <Link
          key={l.text}
          to={l.href}
          target={l.href.includes("https") ? "_blank" : ""}
          reloadDocument = {true}
        >
          <Button className="h-12 bg-[#F7F7F7] text-black">{l.text}</Button>
        </Link>
      ) : (
        <Link
          key={l.text}
          to={l.href}
          target={l.href.includes("https") ? "_blank" : ""}
        >
          <Button className="h-12 bg-[#F7F7F7] text-black">{l.text}</Button>
        </Link>
      )
    );

  return (
    <header className="w-full h-[5rem] flex  p-2 pl-10 pr-10 border-2 border-black bg-[#AD8DCE] ">
      <nav
        className="flex justify-between items-center w-full "
        aria-label="Main"
      >
        <Link to="/" className="h-full">
          <div className="leftNavbar flex h-full items-center ">
            <img src="/ramen-bowl.svg" className="h-full"></img>

            <h2 className="text-3xl text-[#f7ebd8]">MULTI-MEAL</h2>
          </div>
        </Link>
        <div className="rightNavbar flex h-full  items-center gap-2">
          {mappedLinks}
        </div>
      </nav>
    </header>
  );
}

