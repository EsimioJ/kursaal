import React, { useState } from "react";
import data from "./olddata";
import Slide from "./slide";

function slider() {
  const filmArray = data.films;
  console.log(filmArray);
  const [active, setActive] = useState(0);

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

  filmArray.sort((a, b) => {
    a = new Date(a.film_occupations[0].start);
    a = a.getTime();
    b = new Date(b.film_occupations[0].start);
    b = b.getTime();
    console.log(a, b);
    return a - b;
  });

  return (
    <section>
      <div className="slider">
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
      <div className="btn-group">
        <button className="btn" onClick={nextFilm}>prev</button>
        <button className="btn" onClick={nextFilm}>next</button>
      </div>
    </section>
  );
}

export default slider;
