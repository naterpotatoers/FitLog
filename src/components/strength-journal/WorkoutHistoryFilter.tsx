import { ExerciseDTO, MOCK_EXERCISES } from '../../dto/Exercise.dto';

export default function WorkoutHistoryFilter({ handleJournalFilter }) {
    return (
        <div className='grid'>
            <div className='card'>
                <div className='form-item'>
                    <h3>Filter Exercises</h3>
                    <select name='filter' id='filter' onChange={handleJournalFilter} className='form-input'>
                        {MOCK_EXERCISES.map((exercise: ExerciseDTO) => {
                            return <option key={exercise.id} value={exercise.id}>{exercise.id}</option>
                        }
                        )}
                    </select>
                </div>
            </div>
        </div>
    )
}
