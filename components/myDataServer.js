import fetch from 'isomorphic-unfetch';



function MyDataServer({ films }) {
  console.log("FILMS",films);
  return (
    <div>
      {films && films.map((film) => (
        <div key={film.id}>
          <h2>{film.title} A</h2>
          <p>{film.description} B</p>
        </div>
      ))}
      ciao!
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://kursaal.18tickets.it/api/v2/films/expanded.json');
  const data = await res.json();
  console.log("DATA",data);

  return {
    props: {
      films: data
    }
  };
}



export default MyDataServer;