export default function ProductionCard({ production }) {
  return (
    <ul key={production.id}>
      <li>Titolo: {production.title}</li>
      <li>Titolo originale: {production.original_title}</li>
      <li>Lingua: {production.original_language}</li>
      <li>Voto: {production.vote_average}</li>
      <li>Poster: {production.poster_path}</li>
    </ul>
  );
}
