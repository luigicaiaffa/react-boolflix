import ProductionCard from "./ProductionCard";

export default function ProductionList({ productions }) {
  return (
    <div className="row g-4">
      {productions.map((production) => {
        return <ProductionCard key={production.id} production={production} />;
      })}
    </div>
  );
}
