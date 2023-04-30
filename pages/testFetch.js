import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Slide from "../components/slide";

function testFetch({ films }) {
    const filmArray = films.films;
    console.log("filmArray", filmArray);


    const [active, setActive] = useState(0);
    const [isHover, setIsHover] = useState(false);
  
    const hoverCheck = (val) => {
      //setIsHover(val)
      console.log(val);
      if (val === false) {
        console.log("Vai");
        setIsHover(false);
      } else {
        console.log("Ferma");
        setIsHover(true);
      }
    };
  
    const nextFilm = () => {
      setActive((prevSlide) => {
        if (prevSlide + 1 > filmArray.length - 1) {
          return 0;
        }
        return prevSlide + 1;
      });
    };
  
    const prevFilm = () => {
      setActive((prevSlide) => {
        if (prevSlide - 1 < 0) {
          return filmArray.length - 1;
        }
        return prevSlide - 1;
      });
    };
  
    useEffect(() => {
      const timer = setTimeout(() => {
        if (isHover === false) {
          nextFilm();
        }
      }, 500000);
  
      return () => clearTimeout(timer);
    }, [active]);
  
    filmArray.sort((a, b) => {
      a = new Date(a.film_occupations[0].start);
      a = a.getTime();
      b = new Date(b.film_occupations[0].start);
      b = b.getTime();
      // console.log(a, b);
      return a - b;
    }); 
  
    return (
      <section className=" m-auto w-full xl:w-[70%] bg-black py-6">
        <div
          className="slider"
          onMouseOver={() => hoverCheck(true)}
          onMouseLeave={() => hoverCheck(false)}
        >
          {/* <div className="w-full flex relative overflow-x-hidden flex-nowrap h-[400px] bg-red-500"> */}
          {filmArray.map((film, index) => {
            let positionClass = "";
            if (index === active) {
              positionClass = "active";
            } else if (
              index + 1 === active ||
              (active === 0 && index === filmArray.length - 1)
            ) {
              positionClass = "prev";
            } else {
              positionClass = "next";
            }
  
            return <Slide key={film.id} {...film} classes={positionClass} />;
          })}
        </div>
        <div className="-top-80 relative z-50 max-w-full flex flex-1 justify-between">
          <button
            className="w-10 h-[90px] dark:bg-gray-400 hover:bg-red-500 "
            onClick={prevFilm}
          >
            <ChevronLeftIcon />
          </button>
          <button
            className="w-10 h-[90px] dark:bg-gray-400 hover:bg-red-500"
            onClick={nextFilm}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </section>
    );
  }


export async function getStaticProps() {
  const res = await fetch(
    "https://kursaal.18tickets.it/api/v2/films/expanded.json"
  );
  const data = await res.json();

  console.log("DATA ",data);

  return {
    props: {
      films: data,
    },
    revalidate: 10 * 60 * 24, 
  };
}

export default testFetch;
