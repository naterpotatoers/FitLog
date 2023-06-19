import { useState, useRef, useEffect } from 'react'
import { StrengthJournalDTO } from '../dto/StrengthJournal.dto'

import AddStrengthSet from '../components/Forms/AddStrengthSet'
import WorkoutHistory from '../components/WorkoutHistory'
import { getUserStrengthJournals } from '../api/journals.api'
import WorkoutHistoryFilter from '../components/WorkoutHistoryFilter';

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
      <WorkoutHistoryFilter handleJournalFilter={handleJournalFilter} />
      <WorkoutHistory journals={journals} setJournals={setJournals} />
    </div>
  )
}
