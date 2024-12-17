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
    <div className="col-md-6 col-xxl-4">
      <div className="card text-bg-dark">
        <img
          src={posterUrlFormatter(production.poster_path)}
          className="card-img"
          alt="..."
        />
        <div className="card-img-overlay">
          <h5 className="card-title">
            <b>{production.title}</b>
          </h5>

          <span>
            <b>Titolo originale: </b>
            {production.original_title}
          </span>

          <p className="card-text">
            <b>Trama: </b>
            {production.overview}
          </p>

          <div className="py-2 text-warning">
            {voteStarsFormatter(production.vote_average)}
          </div>

          <div>
            <img
              src={`https://flagsapi.com/${langFormatter(
                production.original_language
              )}/flat/64.png`}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
