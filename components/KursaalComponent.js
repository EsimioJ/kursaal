import React, { useState, useEffect } from "react";
import axios from "axios";
//const url = "https://kursaal.18tickets.it/api/v2/films/expanded.json";

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
      <h1>Kursaal</h1>
      <ul className="films">
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
            console.log(film_occupations[i].start, title);
          }

          return (
            <li key={id} className="shadow">
              <h2>{title}</h2>
              <div className="container">
                <div className="sx">
                  <img src={img} alt={title} />
                </div>
                <div className="sx">
                  <p>
                    Trama:
                    <br />
                    {plot}
                  </p>
                  <h4>Regia: {director}</h4>
                  <h6>Cast: {cast}</h6>
                  <p>Durata: {length} minuti</p>

                  <p>
                    <a
                      href={`https://www.youtube.com/watch?v=` + url_trailer}
                      target="_blank"
                    >
                      Trailer
                    </a>
                  </p>
                  <h2 className="center">
                    Spettacoli:
                    </h2>
                    <ul>

                    {film_occupations.map((spettacolo)=>{
                      let spettacoloD = new Date(spettacolo.start);
                      spettacoloD = spettacoloD.toLocaleDateString();
                      let spettacoloO = new Date(spettacolo.start);
                      spettacoloO = spettacoloO.toLocaleTimeString();
                      console.log(spettacoloD, spettacoloO);
                      return (
                        <li key={spettacolo.projection_public_id}>{spettacoloD} - {spettacoloO}</li>
                        )
                      })}
                      </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default KursaalComponent;
