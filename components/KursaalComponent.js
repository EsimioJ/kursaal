import React, { useState, useEffect } from "react";
import axios from "axios";
//const url = "https://kursaal.18tickets.it/api/v2/films/expanded.json";
import { TicketIcon } from "@heroicons/react/24/outline";

import data from "./data";

const KursaalComponent = () => {
  const filmArray = data.films;
  //console.log(filmArray);
  filmArray.sort((a, b) => {
    a = new Date(a.film_occupations[0].start);
    a = a.getTime();
    b = new Date(b.film_occupations[0].start);
    b = b.getTime();
    //console.log(a, b);
    return a - b;
  });

  // const sortedFilms = data.films.sort(
  //   (a, b) =>
  //     // new Date(b.film_occupations[0].start) - Date(a.film_occupations[0].start)
  //     a.getTime(film_occupations[0].start) -
  //     b.getTime(film_occupations[0].start)
  // );
  // console.log(sortedFilms);
  // for (let i=0; i<data.films.length; i++){
  //   let a = new Date(data.films[i].film_occupations[0].start);
  //   let b = new Date(data.films[i+1].film_occupations[0].start);
  //   console.log(a.getTime());
  //   console.log(b.getTime());
  // }

  const [films, setFilms] = useState(data.films);
  const [active, setActive] = useState(0);

  //console.log(films);
  // const getData = async () => {
  //   const response = await axios.get(url);
  //   //console.log(response);
  //   setFilms(response.data);
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <>
      <ul className="films w-full flex flex-row mx-4 overflow-x-scroll">
        {films.map((film) => {
          const {
            title,
            id,
            length,
            playbill_path: img,
            plot,
            cast,
            director,
            film_url,
            url_trailer,
            film_occupations,
          } = film;
          const today = new Date(film_occupations[0].start);
          //console.log(today);
          const prossimoD = today.toLocaleDateString(); // 5/12/2020
          const prossimoT = today.toLocaleTimeString();

          for (let i = 0; i < film_occupations.length; i++) {
            //console.log(film_occupations[i].start, title);
          }

          return (
            <li key={id} className="filmCard bg-white">
              <Spettacolo {...film} />
            </li>
          );
        })}
      </ul>
      <div class="w-full flex justify-center items-center mt-8">
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-0 px-2 rounded-l">
          Prev
        </button>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-0 px-2 rounded-r">
          Next
        </button>
      </div>
    </>
  );
};




 function Spettacolo({
  title,
  id,
  length,
  playbill_path: img,
  plot,
  cast,
  director,
  film_url,
  url_trailer,
  film_occupations,
}) {
  return (
    <div>
      <div className=" basis-1/3 p-4">
                <img src={img} alt={title} />
              </div>
              <div className=" basis-2/3 p-4 mt-2">
                <h2 className=" text-3xl">{title}</h2>

                <h4 className="text-lg mt-2">
                  <b>Regia:</b> {director}
                </h4>
                <h6>
                  <b>Cast:</b> {cast}
                </h6>
                <p>
                  <b>Durata:</b>
                  {length} minuti
                </p>
                <h2 className=" text-lg mt-2">
                  <b>Spettacoli:</b>
                </h2>
                <ul>
                  {film_occupations.map((spettacolo) => {
                    let spettacoloD = new Date(spettacolo.start);
                    spettacoloD = spettacoloD.toLocaleDateString();
                    let spettacoloO = new Date(spettacolo.start);
                    spettacoloO = spettacoloO.toLocaleTimeString();
                    //console.log(spettacoloD, spettacoloO);
                    return (
                      <li
                        className="mt-2"
                        key={spettacolo.projection_public_id}
                      >
                        {spettacoloD} - {spettacoloO}{" "}
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                          Acquista
                        </button>
                        <TicketIcon className="h-6 w-6 text-red-500 hover:text-red-700" />
                      </li>
                    );
                  })}
                </ul>
                <p className="mt-2">
                  <b>Trama:</b>
                  <br />
                  {plot}
                </p>

                <button
                  className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  href={`https://www.youtube.com/watch?v=` + url_trailer}
                  target="_blank"
                >
                  Trailer
                </button>
              </div>
    </div>
  )
}




export default KursaalComponent;
