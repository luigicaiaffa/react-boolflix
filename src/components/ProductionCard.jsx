export default function ProductionCard({ production }) {
  function langFormatter(lang) {
    if (lang === "en") return "GB";
    if (lang === "ja") return "JP";
    return lang.toUpperCase();
  }

  function posterUrlFormatter(path) {
    const apiUrl = `https://image.tmdb.org/t/p`;
    const imgDim = `/w342`;
    return apiUrl + imgDim + path;
  }

  function voteStarsFormatter(vote) {
    if (vote <= 2) {
      return (
        <>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </>
      );
    }

    if (vote <= 4) {
      return (
        <>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </>
      );
    }

    if (vote <= 6) {
      return (
        <>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </>
      );
    }

    if (vote <= 8) {
      return (
        <>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </>
      );
    }

    if (vote <= 10) {
      return (
        <>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </>
      );
    }
  }

  return (
    <ul key={production.id}>
      <li>
        <strong>Titolo: </strong>
        {production.title}
      </li>
      <li>
        <strong>Titolo originale: </strong>
        {production.original_title}
      </li>
      <li>
        <strong>Lingua: </strong>
        {production.original_language}
        <img
          src={`https://flagsapi.com/${langFormatter(
            production.original_language
          )}/flat/64.png`}
          alt=""
        />
      </li>
      <li>
        <strong>Voto: </strong>
        {voteStarsFormatter(production.vote_average)}
      </li>
      <li>
        <strong>Poster: </strong>
        {production.poster_path}
        <img src={posterUrlFormatter(production.poster_path)} alt="" />
      </li>
    </ul>
  );
}
