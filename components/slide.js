import React from "react";
import { TicketIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

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
      <div className="film flex-col md:flex-row absolute md:relative overflow-y-scroll md:overflow-hidden">
        <div className="basis-auto md:basis-2/4 p-0 md:p-4 bg-black/50 mt-0 md:mt-2">
          <Image src={img} alt={title} width="200" height="400" className=" float-right h-fit md:h-[400px] min-w-fit w-full md:w-auto" />
        </div>
        <div className="basis-auto md:basis-2/4 p-0 md:p-4 bg-black/60 w-[88vw] mt-72 md:mt-2 h-full absolute md:relative max-h-[450px]  overflow-hidden md:overflow-y-scroll">
          <h2 className=" text-3xl bg-black/60">{title}</h2>

          <h2 className=" text-lg font-extrabold mt-2">
            Spettacoli:
          </h2>
          <ul className=" max-w-[470px] flex flex-nowrap justify-start overflow-x-scroll">
            {film_occupations.map((spettacolo) => {
              const options = { year: 'numeric', month: 'short' };
              const optDay = { weekday: 'long', };
              const optNum = { day: 'numeric' };



              let spettacoloD = new Date(spettacolo.start);
              let spetDay = spettacoloD.toLocaleDateString('it-IT', optDay);
              let spetNum = spettacoloD.toLocaleDateString('it-IT', optNum);
              spettacoloD = spettacoloD.toLocaleDateString('it-IT', options);

              let spettacoloO = new Date(spettacolo.start);
              spettacoloO = spettacoloO.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
              //console.log(spettacoloD, spettacoloO);
              return (
                <li className="min-w-[120px] block m-2 px-0 text-center rounded-xl" key={spettacolo.projection_public_id}>
                  <Link href={film_url} className="block bg-red-500 hover:bg-red-700 text-white hover:text-gray-50 font-bold py-1 px-2 rounded">
                    <TicketIcon className="h-6 w-6 m-auto" />
                  <div className="m-0 p-0">{spetDay} </div> 
                  <div className="text-2xl font-bold m-0 p-0">{spetNum} </div> 
                  <div className=" text-xs m-0 p-0">{spettacoloD} </div> 
                  <div className="text-sm mt-4 p-0">ore: <span className=" text-2xl font-black">{spettacoloO}</span></div>
                 
                  </Link>
                </li>
              );
            })}
          </ul>

          <h4 className="text-lg mt-2">
            <b>Regia:</b> {director} <br /> <b>Cast:</b> {cast}
          </h4>
          <h6></h6>
          <p>
            <b>Durata: </b>
            {length} minuti
          </p>

          <p className="mt-2">
            <b>Trama:</b> {plot.toLowerCase()}
          </p>

          <button
            className="mt-4 mb-14 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
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
