import AddNutritionEntry from "./AddNutritionEntry";

export default function NutritionHistory() {
  return (
    <div className="grid">
      <h2 className="title">Nutrition History</h2>
      <AddNutritionEntry />
      <div className="list">
        List
      </div>
    </div>
  );
}
