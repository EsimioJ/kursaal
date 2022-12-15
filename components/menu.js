import Link from "next/link";
import { useState } from "react";

const menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function togMenu() {
    //isMenuOpen = !isMenuOpen; //cambia il valore ma non lo state e quindi non rirenderizza!
    console.log("tog!", isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="flex items-center justify-between flex-wrap  p-6">
      <div className="flex flex-shrink-0 flex-col mr-6">
        <Link href="/" className=" ">
          <h1 className="font-semibold block text-8xl tracking-tight cursor-pointer hover:font-bold">
            Kursaal.
          </h1>
        </Link>
        <h2 className="text-sm font-thin block">
          il cinema di Porretta, a volte teatro, molto spesso polis
        </h2>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded hover:text-red-500 hover:border-red-500"
          onClick={() => togMenu()}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } w-full flex flex-grow lg:block lg:items-center lg:w-auto`}
      >
        <div className="fixed top-2/6 left-0 z-30 lg:relative w-full h-4/6 lg:h-min bg-red-50 text-lg flex flex-col lg:flex-row items-center justify-evenly lg:flex-grow">
          <Link
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-red-300 hover:text-red-500 mr-4"
          >
            Home
          </Link>
          <Link
            href="/prezzi"
            className="block mt-4 lg:inline-block lg:mt-0 text-red-300 hover:text-red-500 mr-4"
          >
            Prezzi
          </Link>
          <Link
            href="/contatti"
            className="block mt-4 lg:inline-block lg:mt-0 text-red-300 hover:text-red-500"
          >
            Contatti
          </Link>
          <Link
            href="/meeting-e-congressi"
            className="block mt-4 lg:inline-block lg:mt-0 text-red-300 hover:text-red-500"
          >
            Meeting e congressi
          </Link>
          <div>
            <Link
              href="#"
              className="inline-block text-sm px-4 py-2 bg-red-500 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Acquista biglietti
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default menu;
