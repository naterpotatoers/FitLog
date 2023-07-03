import NutritionHistory from "../components/nutrition-journal/NutritionHistory";
import WorkoutHistory from "../components/strength-journal/WorkoutHistory";

export default function Home() {
  return (
    <div className="grid">
      <NutritionHistory />
      <WorkoutHistory/>
    </div>
  );
}
