import { useState, useEffect } from 'react'
import { StrengthJournalDTO } from '../dto/StrengthJournal.dto'

import AddStrengthSet from '../components/Forms/AddStrengthSet'
import WorkoutHistory from '../components/WorkoutHistory'
import { getUserStrengthJournals } from '../api/journals.api'

export default function Home() {
  const [journals, setJournals] = useState<StrengthJournalDTO[]>([])
  // const [journals, setJournals] = useState<StrengthJournalDTO[]>(sortedMockJournals)

  // comment out the following useEffect to use the mock data
  useEffect(() => {
    const getJournals = async () => {
      const result = await getUserStrengthJournals()
      setJournals(result)
    }
    getJournals()
  }, [])

  return (
    <div className='grid'>
      <AddStrengthSet setJournals={setJournals} />
      <WorkoutHistory journals={journals} setJournals={setJournals} />
    </div>
  )
}
