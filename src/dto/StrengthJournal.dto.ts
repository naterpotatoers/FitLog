export type StrengthJournalDTO = {
  email: string;
  exercise: string;
  reps: number;
  duration: number;
  intensity: number;
  weight: number;
  entry_method: string;
  created_at: string;
  updated_at: string;
}

export let MOCK_JOURNAL_ENTRIES: StrengthJournalDTO[] = [
  {
    "email": "0",
    "created_at": "2023-03-22T01:10:17+0000",
    "updated_at": "2023-03-22T01:10:17+0000",
    "exercise": "Barbell Bench Press",
    "entry_method": "Example hardcoded entry",
    "duration": 30,
    "intensity": 5,
    "reps": 10,
    "weight": 135
  },
  {
    "email": "1",
    "created_at": "2023-03-24T01:10:17+0000",
    "updated_at": "2023-03-24T01:10:17+0000",
    "exercise": "Barbell Bench Press",
    "entry_method": "Example hardcoded entry",
    "duration": 30,
    "intensity": 5,
    "reps": 10,
    "weight": 135
  },
  {
    "email": "2",
    "created_at": "2023-03-24T01:10:19+0000",
    "updated_at": "2023-03-24T01:10:19+0000",
    "exercise": "Barbell Bench Press",
    "entry_method": "Example hardcoded entry",
    "duration": 30,
    "intensity": 5,
    "reps": 10,
    "weight": 135
  },
  {
    "email": "3",
    "created_at": "2023-03-24T01:10:21+0000",
    "updated_at": "2023-03-24T01:10:21+0000",
    "exercise": "Barbell Bench Press",
    "entry_method": "Example hardcoded entry",
    "duration": 30,
    "intensity": 5,
    "reps": 10,
    "weight": 135
  },
  {
    "email": "4",
    "created_at": "2023-03-24T01:10:23+0000",
    "updated_at": "2023-03-24T01:10:23+0000",
    "exercise": "Barbell Bench Press",
    "entry_method": "Example hardcoded entry",
    "duration": 30,
    "intensity": 5,
    "reps": 10,
    "weight": 135
  },
  {
    "email": "5",
    "created_at": "2023-03-24T01:10:25+0000",
    "updated_at": "2023-03-24T01:10:25+0000",
    "exercise": "Incline Dumbbell Overhead Press",
    "entry_method": "Example hardcoded entry",
    "duration": 30,
    "intensity": 5,
    "reps": 10,
    "weight": 135
  },
  {
    "email": "6",
    "created_at": "2023-03-24T01:10:27+0000",
    "updated_at": "2023-03-24T01:10:27+0000",
    "exercise": "Incline Dumbbell Overhead Press",
    "entry_method": "Example hardcoded entry",
    "duration": 30,
    "intensity": 5,
    "reps": 10,
    "weight": 135
  },
  {
    "email": "7",
    "created_at": "2023-03-24T01:10:29+0000",
    "updated_at": "2023-03-24T01:10:29+0000",
    "exercise": "Incline Dumbbell Overhead Press",
    "entry_method": "Example hardcoded entry",
    "duration": 30,
    "intensity": 5,
    "reps": 10,
    "weight": 135
  },
  {
    "email": "8",
    "created_at": "2023-03-24T01:10:31+0000",
    "updated_at": "2023-03-24T01:10:31+0000",
    "exercise": "Smith Machine Squat",
    "entry_method": "Example hardcoded entry",
    "duration": 30,
    "intensity": 5,
    "reps": 10,
    "weight": 135
  },
  {
    "email": "9",
    "created_at": "2023-03-24T01:10:33+0000",
    "updated_at": "2023-03-24T01:10:33+0000",
    "exercise": "Smith Machine Squat",
    "entry_method": "Example hardcoded entry",
    "duration": 30,
    "intensity": 5,
    "reps": 10,
    "weight": 135
  },
  {
    "email": "10",
    "created_at": "2023-03-24T01:10:35+0000",
    "updated_at": "2023-03-24T01:10:35+0000",
    "exercise": "Smith Machine Squat",
    "entry_method": "Example hardcoded entry",
    "duration": 30,
    "intensity": 5,
    "reps": 10,
    "weight": 135
  },
  {
    "email": "11",
    "created_at": "2023-03-24T01:10:37+0000",
    "updated_at": "2023-03-24T01:10:37+0000",
    "exercise": "Barbell Deadlift",
    "entry_method": "Example hardcoded entry",
    "duration": 30,
    "intensity": 5,
    "reps": 10,
    "weight": 135
  },
  {
    "email": "12",
    "created_at": "2023-03-24T01:10:39+0000",
    "updated_at": "2023-03-24T01:10:39+0000",
    "exercise": "Barbell Deadlift",
    "entry_method": "Example hardcoded entry",
    "duration": 30,
    "intensity": 5,
    "reps": 10,
    "weight": 135
  },
  {
    "email": "13",
    "created_at": "2023-03-24T01:10:41+0000",
    "updated_at": "2023-03-24T01:10:41+0000",
    "exercise": "Barbell Deadlift",
    "entry_method": "Example hardcoded entry",
    "duration": 30,
    "intensity": 5,
    "reps": 10,
    "weight": 135
  },
  {
    "email": "13",
    "created_at": "2023-03-26T01:10:41+0000",
    "updated_at": "2023-03-26T01:10:41+0000",
    "exercise": "Barbell Deadlift",
    "entry_method": "Example hardcoded entry",
    "duration": 30,
    "intensity": 5,
    "reps": 10,
    "weight": 135
  },
  {
    "email": "14",
    "created_at": "2023-03-26T01:10:41+0000",
    "updated_at": "2023-03-26T01:10:41+0000",
    "exercise": "Barbell Deadlift",
    "entry_method": "Example hardcoded entry",
    "duration": 30,
    "intensity": 5,
    "reps": 10,
    "weight": 135
  },
  {
    "email": "15",
    "created_at": "2023-03-26T01:10:41+0000",
    "updated_at": "2023-03-26T01:10:41+0000",
    "exercise": "Barbell Deadlift",
    "entry_method": "Example hardcoded entry",
    "duration": 30,
    "intensity": 5,
    "reps": 10,
    "weight": 135
  },
  {
    "email": "16",
    "created_at": "2023-03-26T01:10:41+0000",
    "updated_at": "2023-03-26T01:10:41+0000",
    "exercise": "Barbell Deadlift",
    "entry_method": "Example hardcoded entry",
    "duration": 30,
    "intensity": 5,
    "reps": 10,
    "weight": 135
  },
  {
    "email": "17",
    "created_at": "2023-03-26T01:10:41+0000",
    "updated_at": "2023-03-26T01:10:41+0000",
    "exercise": "Barbell Curl",
    "entry_method": "Example hardcoded entry",
    "duration": 30,
    "intensity": 5,
    "reps": 10,
    "weight": 135
  },
  {
    "email": "18",
    "created_at": "2023-03-26T01:10:41+0000",
    "updated_at": "2023-03-26T01:10:41+0000",
    "exercise": "Barbell Curl",
    "entry_method": "Example hardcoded entry",
    "duration": 30,
    "intensity": 5,
    "reps": 10,
    "weight": 135
  },
  {
    "email": "19",
    "created_at": "2023-03-26T01:10:41+0000",
    "updated_at": "2023-03-26T01:10:41+0000",
    "exercise": "Barbell Curl",
    "entry_method": "Example hardcoded entry",
    "duration": 30,
    "intensity": 5,
    "reps": 10,
    "weight": 135
  },
  {
    "email": "20",
    "created_at": "2023-03-26T01:10:41+0000",
    "updated_at": "2023-03-26T01:10:41+0000",
    "exercise": "Leg Extension",
    "entry_method": "Example hardcoded entry",
    "duration": 30,
    "intensity": 5,
    "reps": 10,
    "weight": 135
  },
  {
    "email": "21",
    "created_at": "2023-03-26T01:10:41+0000",
    "updated_at": "2023-03-26T01:10:41+0000",
    "exercise": "Leg Extension",
    "entry_method": "Example hardcoded entry",
    "duration": 30,
    "intensity": 5,
    "reps": 10,
    "weight": 135
  },
  {
    "email": "22",
    "created_at": "2023-03-26T01:12:41+0000",
    "updated_at": "2023-03-26T01:12:41+0000",
    "exercise": "Leg Extension",
    "entry_method": "Example hardcoded entry",
    "duration": 30,
    "intensity": 5,
    "reps": 10,
    "weight": 135
  },
  {
    "email": "23",
    "created_at": "2023-03-26T01:10:41+0000",
    "updated_at": "2023-03-26T01:10:41+0000",
    "exercise": "Leg Curl",
    "entry_method": "Example hardcoded entry",
    "duration": 30,
    "intensity": 5,
    "reps": 10,
    "weight": 135
  },
  {
    "email": "24",
    "created_at": "2023-03-26T01:10:41+0000",
    "updated_at": "2023-03-26T01:10:41+0000",
    "exercise": "Leg Curl",
    "entry_method": "Example hardcoded entry",
    "duration": 30,
    "intensity": 5,
    "reps": 10,
    "weight": 135
  },
  {
    "email": "25",
    "created_at": "2023-03-26T01:12:41+0000",
    "updated_at": "2023-03-26T01:12:41+0000",
    "exercise": "Leg Curl",
    "entry_method": "Example hardcoded entry",
    "duration": 30,
    "intensity": 5,
    "reps": 10,
    "weight": 135
  },
  {
    "email": "26",
    "created_at": "2023-03-27T01:12:41+0000",
    "updated_at": "2023-03-27T01:12:41+0000",
    "exercise": "Standing Dumbbell Overhead Press",
    "entry_method": "Example hardcoded entry",
    "duration": 30,
    "intensity": 5,
    "reps": 10,
    "weight": 135
  },
  {
    "email": "27",
    "created_at": "2023-03-27T01:10:41+0000",
    "updated_at": "2023-03-27T01:10:41+0000",
    "exercise": "Standing Dumbbell Overhead Press",
    "entry_method": "Example hardcoded entry",
    "duration": 30,
    "intensity": 5,
    "reps": 10,
    "weight": 135
  },
  {
    "email": "28",
    "created_at": "2023-03-27T01:10:41+0000",
    "updated_at": "2023-03-27T01:10:41+0000",
    "exercise": "Standing Dumbbell Overhead Press",
    "entry_method": "Example hardcoded entry",
    "duration": 30,
    "intensity": 5,
    "reps": 10,
    "weight": 135
  },
  {
    "email": "29",
    "created_at": "2023-03-27T01:12:41+0000",
    "updated_at": "2023-03-27T01:12:41+0000",
    "exercise": "Standing Dumbbell Overhead Press",
    "entry_method": "Example hardcoded entry",
    "duration": 30,
    "intensity": 5,
    "reps": 10,
    "weight": 135
  }
];