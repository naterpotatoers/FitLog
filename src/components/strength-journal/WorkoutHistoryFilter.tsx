import InputSelect from "../../common/InputSelect";
import { ExerciseDTO, MOCK_EXERCISES } from "../../dto/Exercise.dto";

export default function WorkoutHistoryFilter({ handleJournalFilter }) {
  return (
    <div className="grid">
      <div className="card">
        <InputSelect
          name="exercise"
          label="Exercise"
          options={MOCK_EXERCISES.map((exercise: ExerciseDTO) => {
            return {
              label: exercise.id,
              value: exercise.id,
            };
          })}
          onChange={handleJournalFilter}
        />
      </div>
    </div>
  );
}
