import Footer from "../components/footer";
import Meta from "../components/meta";
import Menu from "../components/menu";
import { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function Layout({ children }) {
  const [tema, setTema] = useState("dark");
  const [isBlack, setIsBlack] = useState(true);

  function cambiaTema() {
    console.log("isBlack ", isBlack);
    setIsBlack(!isBlack);
    if (isBlack === true) {
      setTema("dark");
    } else {
      setTema("light");
    }
  }

  return (
    <>
      <Meta />
      {console.log("tema", tema)}
      <div className={`min-h-screen ${tema}`}>
        <button
          className="absolute mt-20 md:mt-4 right-4 w-6 md:w-10 h-6 md:h-10"
          onClick={() => {
            cambiaTema();
          }}
        >
          {tema === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
        <Menu />

        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
