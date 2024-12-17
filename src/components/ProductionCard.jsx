export default function ProductionCard({ production }) {
  function langFormatter(lang) {
    if (lang === "en") return "GB";
    if (lang === "ja") return "JP";
    if (lang === "hi") return "IN";
    return lang.toUpperCase();
  }

  function posterUrlFormatter(path) {
    const apiUrl = `https://image.tmdb.org/t/p`;
    const imgDim = `/w342`;

    if (!path)
      return `https://fakeimg.pl/342x400/212529/4f4f4f?text=Missing+Img`;

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
      <div className="card h-100 text-bg-dark">
        <img
          src={posterUrlFormatter(production.poster_path)}
          className="card-img"
          alt="Missing Image"
        />
        <div className="card-img-overlay">
          <h5 className="card-title">
            <b>{production.title}</b>
          </h5>

          <p className="card-text mb-1">
            <small>
              <b>Titolo originale: </b>
              {production.original_title}
            </small>
          </p>

          <p className="card-text mb-2">
            <small>
              <b>Trama: </b>
              {production.overview}
            </small>
          </p>

          <div className="text-warning">
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
