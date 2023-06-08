export type StrengthJournalDTO = {
  id: string;
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

export let DEFAULT_STRENGTH_JOURNAL: StrengthJournalDTO = {
  id: "",
  email: '',
  exercise: '',
  reps: 0,
  weight: 0,
  duration: 40,
  intensity: 7,
  entry_method: 'Manual web app entry',
  created_at: '',
  updated_at: '',
}

export let MOCK_JOURNAL: StrengthJournalDTO = {
  "id": "1",
  "updated_at": "2023-05-29T19:03:21.873Z",
  "created_at": "2023-05-29T19:03:21.873Z",
  "exercise": "Dumbbell Pendlay Row",
  "entry_method": "Manual web app entry",
  "weight": 100,
  "reps": 8,
  "email": "nate@email.com",
  "intensity": 0,
  "duration": 0
};

export let MOCK_JOURNAL_ENTRIES: StrengthJournalDTO[] = [
  {
    "exercise": "Dumbbell Pendlay Row",
    "created_at": "2023-05-29T19:03:21.873Z",
    "weight": 100,
    "entry_method": "Manual web app entry",
    "email": "nate@email.com",
    "intensity": 0,
    "duration": 0,
    "updated_at": "2023-05-29T19:03:21.873Z",
    "reps": 8,
    "id": "0NTlmrcG93GC3D34A024"
  },
  {
    "created_at": "2023-05-29T19:27:54.165Z",
    "duration": 0,
    "entry_method": "Manual web app entry",
    "intensity": 0,
    "exercise": "Incline Dumbbell Curl",
    "weight": 50,
    "email": "nate@email.com",
    "updated_at": "2023-05-29T19:27:54.165Z",
    "reps": 12,
    "id": "0adimnAc54MPFcTkwDvn"
  },
  {
    "weight": 100,
    "updated_at": "2023-05-29T18:58:14.787Z",
    "intensity": 0,
    "exercise": "Dumbbell Pendlay Row",
    "duration": 0,
    "created_at": "2023-05-29T18:58:14.787Z",
    "email": "nate@email.com",
    "entry_method": "Manual web app entry",
    "reps": 12,
    "id": "9t0EqF1xawhG4qIryzBv"
  },
  {
    "weight": 50,
    "duration": 0,
    "reps": 10,
    "intensity": 0,
    "entry_method": "Manual web app entry",
    "email": "nate@email.com",
    "updated_at": "2023-05-29T19:29:38.443Z",
    "exercise": "Incline Dumbbell Curl",
    "created_at": "2023-05-29T19:29:38.443Z",
    "id": "FNOY6ED9Kobmz4qL008L"
  },
  {
    "exercise": "Incline Dumbbell Bench Press",
    "created_at": "2023-05-29T19:08:21.486Z",
    "updated_at": "2023-05-29T19:08:21.486Z",
    "reps": 12,
    "email": "nate@email.com",
    "duration": 0,
    "weight": 100,
    "intensity": 0,
    "entry_method": "Manual web app entry",
    "id": "GzdHPko8xGcv2iQAxnk1"
  },
  {
    "updated_at": "2023-05-29T18:48:15.054Z",
    "reps": 10,
    "intensity": 0,
    "created_at": "2023-05-29T18:48:15.054Z",
    "duration": 0,
    "exercise": "Smith Machine Bench Press",
    "weight": 90,
    "email": "nate@email.com",
    "entry_method": "Manual web app entry",
    "id": "HDXOGmjgzBAC8mTtFJH4"
  },
  {
    "weight": 90,
    "reps": 12,
    "intensity": 0,
    "exercise": "Smith Machine Bench Press",
    "updated_at": "2023-05-29T18:43:28.838Z",
    "email": "nate@email.com",
    "entry_method": "Manual web app entry",
    "duration": 0,
    "created_at": "2023-05-29T18:43:28.838Z",
    "id": "LYkPSrZLPLu8NSvE07XG"
  },
  {
    "weight": 70,
    "exercise": "Low Row Machine",
    "reps": 13,
    "duration": 0,
    "entry_method": "Manual web app entry",
    "intensity": 0,
    "updated_at": "2023-05-29T19:18:15.391Z",
    "created_at": "2023-05-29T19:18:15.391Z",
    "email": "nate@email.com",
    "id": "NyW0LFVgmIKa7nNkCnlg"
  },
  {
    "reps": 12,
    "entry_method": "Manual web app entry",
    "exercise": "Dumbbell Pendlay Row",
    "weight": 100,
    "created_at": "2023-05-29T18:58:19.355Z",
    "email": "nate@email.com",
    "duration": 0,
    "intensity": 0,
    "updated_at": "2023-05-29T18:58:19.355Z",
    "id": "RouybtQUTWhlT00JuYO8"
  },
  {
    "weight": 70,
    "email": "nate@email.com",
    "entry_method": "Manual web app entry",
    "exercise": "Low Row Machine",
    "intensity": 0,
    "duration": 0,
    "updated_at": "2023-05-29T19:18:10.422Z",
    "created_at": "2023-05-29T19:18:10.422Z",
    "reps": 15,
    "id": "TvAN2RTL5oEpbQL50qLi"
  },
  {
    "intensity": 0,
    "reps": 8,
    "email": "nate@email.com",
    "exercise": "Smith Machine Bench Press",
    "created_at": "2023-05-29T18:53:06.638Z",
    "entry_method": "Manual web app entry",
    "duration": 0,
    "weight": 90,
    "updated_at": "2023-05-29T18:53:06.638Z",
    "id": "ZOiGee634dT8cmvQPmeH"
  },
  {
    "created_at": "2023-05-29T19:27:55.075Z",
    "updated_at": "2023-05-29T19:27:55.075Z",
    "exercise": "Incline Dumbbell Curl",
    "weight": 50,
    "duration": 0,
    "email": "nate@email.com",
    "entry_method": "Manual web app entry",
    "intensity": 0,
    "reps": 12,
    "id": "aAYZn2INWLInPubXE3ui"
  },
  {
    "email": "nate@email.com",
    "intensity": 0,
    "reps": 12,
    "entry_method": "Manual web app entry",
    "created_at": "2023-05-29T19:08:13.728Z",
    "updated_at": "2023-05-29T19:08:13.729Z",
    "duration": 0,
    "weight": 100,
    "exercise": "Incline Dumbbell Bench Press",
    "id": "bhKVb3jSrcrrgXFwCCpg"
  },
  {
    "weight": 70,
    "exercise": "Low Row Machine",
    "entry_method": "Manual web app entry",
    "created_at": "2023-05-29T19:18:11.341Z",
    "updated_at": "2023-05-29T19:18:11.341Z",
    "duration": 0,
    "intensity": 0,
    "email": "nate@email.com",
    "reps": 15,
    "id": "cmCUfituCbqp3RTZjPyQ"
  },
  {
    "updated_at": "2023-05-29T19:04:43.464Z",
    "created_at": "2023-05-29T19:04:43.464Z",
    "email": "nate@email.com",
    "intensity": 0,
    "duration": 0,
    "exercise": "Smith Machine Bench Press",
    "weight": 90,
    "reps": 10,
    "entry_method": "Manual web app entry",
    "id": "h39ytc4wEqnzrmir1cgv"
  },
  {
    "updated_at": "2023-05-29T18:58:11.565Z",
    "email": "nate@email.com",
    "created_at": "2023-05-29T18:58:11.565Z",
    "reps": 12,
    "entry_method": "Manual web app entry",
    "duration": 0,
    "intensity": 0,
    "exercise": "Dumbbell Pendlay Row",
    "weight": 100,
    "id": "mmVneJVHZOP0GBtXUpWw"
  },
  {
    "duration": 0,
    "entry_method": "Manual web app entry",
    "reps": 12,
    "email": "nate@email.com",
    "created_at": "2023-05-29T19:04:05.244Z",
    "exercise": "Incline Dumbbell Bench Press",
    "updated_at": "2023-05-29T19:04:05.244Z",
    "weight": 100,
    "intensity": 0,
    "id": "tngdH81819si3Qk8Oquo"
  }
]