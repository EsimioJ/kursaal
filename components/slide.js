import React from "react";
import { TicketIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

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
      <div className="film flex-col md:flex-row ">
        <div className="basis-auto md:basis-2/4 p-0 md:p-4 bg-black/50 mt-0 md:mt-2">
          <Image src={img} alt={title} width="200" height="400" className=" float-right h-fit md:h-[41vh] min-w-fit w-full md:w-auto" />
        </div>
        <div className="basis-auto md:basis-2/4 p-0 md:p-4 bg-black/50 -mt-96 md:mt-2 overflow-y-scroll">
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
            <b>Trama:</b> {plot}
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
