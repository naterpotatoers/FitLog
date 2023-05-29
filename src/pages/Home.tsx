import AddStrengthSet from '../components/Forms/AddStrengthSet'
import UpdateStrengthSet from '../components/Forms/UpdateStrengthSet'
import WorkoutHistory from '../components/WorkoutHistory'

export default function Home() {
  return (
    <div className='grid'>
      <AddStrengthSet />
      <UpdateStrengthSet />
      <WorkoutHistory />
    </div>
  )
}
