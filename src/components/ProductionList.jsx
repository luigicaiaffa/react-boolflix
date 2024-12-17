import ProductionCard from "./ProductionCard";

export default function ProductionList({ productions }) {
  return (
    <div>
      {productions.map((production) => {
        return <ProductionCard key={production.id} production={production} />;
      })}
    </div>
  );
}
