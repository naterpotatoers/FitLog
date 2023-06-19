import { useState, useRef, useEffect } from 'react'
import { StrengthJournalDTO } from '../dto/StrengthJournal.dto'
import { ExerciseDTO, MOCK_EXERCISES } from '../dto/Exercise.dto';

import AddStrengthSet from '../components/Forms/AddStrengthSet'
import WorkoutHistory from '../components/WorkoutHistory'
import { getUserStrengthJournals } from '../api/journals.api'

export default function Home() {
  const [journals, setJournals] = useState<StrengthJournalDTO[]>([])
  // const [journals, setJournals] = useState<StrengthJournalDTO[]>(MOCK_JOURNAL_ENTRIES)
  const originalJournals = useRef<StrengthJournalDTO[]>([])

  // comment out the following useEffect to use the mock data
  useEffect(() => {
    const getJournals = async () => {
      const result = await getUserStrengthJournals()
      setJournals(result)
      originalJournals.current = result
    }
    getJournals()
  }, [])


  const handleJournalFilter = (e) => {
    const filter = e.target.value
    if (filter === '') {
      setJournals(originalJournals.current)
    }
    else {
      const filteredJournals = originalJournals.current.filter((journal) => {
        return journal.exercise === filter
      })
      setJournals(filteredJournals)
    }
  }

  return (
    <div className='grid'>
      <AddStrengthSet setJournals={setJournals} />
      <div className='row'>
        <label htmlFor='filter'>Filter by exercise:</label>
        <select name='filter' id='filter' onChange={handleJournalFilter} className='form-input'>
          {MOCK_EXERCISES.map((exercise: ExerciseDTO) => {
            return <option key={exercise.id} value={exercise.id}>{exercise.id}</option>
          }
          )}
        </select>
      </div>
      <WorkoutHistory journals={journals} setJournals={setJournals} />
    </div>
  )
}
