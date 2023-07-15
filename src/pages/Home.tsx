import NutritionHistory from "../components/nutrition-journal/NutritionHistory";
import WorkoutHistory from "../components/strength-journal/WorkoutHistory";

export default function Home() {
  return (
    <div className="grid">
      <div className="grid-col-1">
        <div>Workout History</div>
        <div>Nutrition History</div>
      </div>
    </div>
  );
}
