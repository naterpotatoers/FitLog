export type WorkoutsDTO = {
  id: number;
  username: string;
  exercise: string;
  reps: number;
  type: string;
  weight: number;
  description: string;
  duration: number;
  intensity: string;
  equipment: string;
  created_at: string;
  updated_at: string;
}

export let MOCK_WORKOUTS: WorkoutsDTO[] = [
  {
    "id": 1,
    "username": "user1",
    "created_at": "2023-03-24T01:10:17+0000",
    "updated_at": "2023-03-24T01:10:17+0000",
    "exercise": "Bench Press",
    "description": "Description for Bench Press",
    "type": "Strength",
    "duration": 30,
    "intensity": "Medium",
    "equipment": "Barbell",
    "reps": 10,
    "weight": 135
  },
  {
    "id": 2,
    "username": "user1",
    "created_at": "2023-03-24T01:10:19+0000",
    "updated_at": "2023-03-24T01:10:19+0000",
    "exercise": "Bench Press",
    "description": "Description for Bench Press",
    "type": "Strength",
    "duration": 30,
    "intensity": "Medium",
    "equipment": "Barbell",
    "reps": 10,
    "weight": 135
  },
  {
    "id": 3,
    "username": "user1",
    "created_at": "2023-03-24T01:10:21+0000",
    "updated_at": "2023-03-24T01:10:21+0000",
    "exercise": "Bench Press",
    "description": "Description for Bench Press",
    "type": "Strength",
    "duration": 30,
    "intensity": "Medium",
    "equipment": "Barbell",
    "reps": 10,
    "weight": 135
  },
  {
    "id": 4,
    "username": "user1",
    "created_at": "2023-03-24T01:10:23+0000",
    "updated_at": "2023-03-24T01:10:23+0000",
    "exercise": "Bench Press",
    "description": "Description for Bench Press",
    "type": "Strength",
    "duration": 30,
    "intensity": "Medium",
    "equipment": "Barbell",
    "reps": 10,
    "weight": 135
  },
  {
    "id": 5,
    "username": "user1",
    "created_at": "2023-03-24T01:10:25+0000",
    "updated_at": "2023-03-24T01:10:25+0000",
    "exercise": "Overhead Press",
    "description": "Description for Overhead Press",
    "type": "Strength",
    "duration": 30,
    "intensity": "Medium",
    "equipment": "Barbell",
    "reps": 10,
    "weight": 135
  },
  {
    "id": 6,
    "username": "user1",
    "created_at": "2023-03-24T01:10:27+0000",
    "updated_at": "2023-03-24T01:10:27+0000",
    "exercise": "Overhead Press",
    "description": "Description for Overhead Press",
    "type": "Strength",
    "duration": 30,
    "intensity": "Medium",
    "equipment": "Barbell",
    "reps": 10,
    "weight": 135
  },
  {
    "id": 7,
    "username": "user1",
    "created_at": "2023-03-24T01:10:29+0000",
    "updated_at": "2023-03-24T01:10:29+0000",
    "exercise": "Overhead Press",
    "description": "Description for Overhead Press",
    "type": "Strength",
    "duration": 30,
    "intensity": "Medium",
    "equipment": "Barbell",
    "reps": 10,
    "weight": 135
  },
  {
    "id": 8,
    "username": "user1",
    "created_at": "2023-03-24T01:10:31+0000",
    "updated_at": "2023-03-24T01:10:31+0000",
    "exercise": "Squat",
    "description": "Description for Squat",
    "type": "Strength",
    "duration": 30,
    "intensity": "Medium",
    "equipment": "Barbell",
    "reps": 10,
    "weight": 135
  },
  {
    "id": 9,
    "username": "user1",
    "created_at": "2023-03-24T01:10:33+0000",
    "updated_at": "2023-03-24T01:10:33+0000",
    "exercise": "Squat",
    "description": "Description for Squat",
    "type": "Strength",
    "duration": 30,
    "intensity": "Medium",
    "equipment": "Barbell",
    "reps": 10,
    "weight": 135
  },
  {
    "id": 10,
    "username": "user1",
    "created_at": "2023-03-24T01:10:35+0000",
    "updated_at": "2023-03-24T01:10:35+0000",
    "exercise": "Squat",
    "description": "Description for Squat",
    "type": "Strength",
    "duration": 30,
    "intensity": "Medium",
    "equipment": "Barbell",
    "reps": 10,
    "weight": 135
  },
  {
    "id": 11,
    "username": "user1",
    "created_at": "2023-03-24T01:10:37+0000",
    "updated_at": "2023-03-24T01:10:37+0000",
    "exercise": "Deadlift",
    "description": "Description for Deadlift",
    "type": "Strength",
    "duration": 30,
    "intensity": "Medium",
    "equipment": "Barbell",
    "reps": 10,
    "weight": 135
  },
  {
    "id": 12,
    "username": "user1",
    "created_at": "2023-03-24T01:10:39+0000",
    "updated_at": "2023-03-24T01:10:39+0000",
    "exercise": "Deadlift",
    "description": "Description for Deadlift",
    "type": "Strength",
    "duration": 30,
    "intensity": "Medium",
    "equipment": "Barbell",
    "reps": 10,
    "weight": 135
  },
  {
    "id": 13,
    "username": "user1",
    "created_at": "2023-03-24T01:10:41+0000",
    "updated_at": "2023-03-24T01:10:41+0000",
    "exercise": "Deadlift",
    "description": "Description for Deadlift",
    "type": "Strength",
    "duration": 30,
    "intensity": "Medium",
    "equipment": "Barbell",
    "reps": 10,
    "weight": 135
  },
  {
    "id": 13,
    "username": "user1",
    "created_at": "2023-03-26T01:10:41+0000",
    "updated_at": "2023-03-26T01:10:41+0000",
    "exercise": "Deadlift",
    "description": "Description for Deadlift",
    "type": "Strength",
    "duration": 30,
    "intensity": "Medium",
    "equipment": "Barbell",
    "reps": 10,
    "weight": 135
  }
];