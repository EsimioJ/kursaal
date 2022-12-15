import React from "react";
import { TicketIcon } from "@heroicons/react/24/outline";

function slide({
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
  classes,
}) {
  return (
    <div className={`slide z-20 ${classes}`}>
      {/* <div className=" flex w-[90%] absolute"> */}
      <div className="film">
        <div className=" basis-1/3 p-0 md:p-4">
          <img src={img} alt={title} />
        </div>
        <div className=" basis-2/3 p-4 mt-2 overflow-y-scroll">
          <h2 className=" text-3xl">{title}</h2>

          <h2 className=" text-lg mt-2">
            <b>Spettacoli:</b>
          </h2>
          <ul className=" flex">
            {film_occupations.map((spettacolo) => {
              let spettacoloD = new Date(spettacolo.start);
              spettacoloD = spettacoloD.toLocaleDateString();
              let spettacoloO = new Date(spettacolo.start);
              spettacoloO = spettacoloO.toLocaleTimeString();
              //console.log(spettacoloD, spettacoloO);
              return (
                <li className="mt-2 text-center w-[90px]" key={spettacolo.projection_public_id}>
                  {/* smontare date e orari */}
                  <span>{spettacoloD} </span> 
                  <span>ore: {spettacoloO}</span>
                 
                  <button className="bg-red-500 hover:bg-red-700 text-white hover:text-gray-50 font-bold py-1 px-2 rounded">
                    <TicketIcon className="h-6 w-6" />
                  </button>
                </li>
              );
            })}
          </ul>

          <h4 className="text-lg mt-2">
            <b>Regia:</b> {director} <br /> <b>Cast:</b> {cast}
          </h4>
          <h6></h6>
          <p>
            <b>Durata:</b>
            {length} minuti
          </p>

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
    </div>
  );
}

export default slide;
