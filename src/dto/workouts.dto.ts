export type WorkoutsDTO = {
  id: string;
  name: string;
  reps: number;
  sets: number;
  type: string;
  weight: number;
  created_at: string | Date;
  updated_at: string | Date;
}

export const MOCK_WORKOUTS = [
  {
    id: '1',
    name: 'Bench Press',
    reps: 10,
    sets: 3,
    type: 'Chest',
    weight: 135,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: '2',
    name: 'Squat',
    reps: 10,
    sets: 3,
    type: 'Legs',
    weight: 225,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: '3',
    name: 'Deadlift',
    reps: 10,
    sets: 3,
    type: 'Back',
    weight: 225,
    created_at: new Date(),
    updated_at: new Date(),
  },
];