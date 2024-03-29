import { ExerciseDTO, MOCK_EXERCISES } from '../dto/Exercise.dto';

export default function WorkoutHistoryFilter({ handleJournalFilter }) {
    return (
        <div className='card'>
            <label htmlFor='filter'>Filter by exercise:</label>
            <select name='filter' id='filter' onChange={handleJournalFilter} className='form-input'>
                {MOCK_EXERCISES.map((exercise: ExerciseDTO) => {
                    return <option key={exercise.id} value={exercise.id}>{exercise.id}</option>
                }
                )}
            </select>
        </div>
    )
}
