import { StrengthJournalDTO } from "./StrengthJournal.dto"

export type GroupedStrengthJournalsDTO = {
    [date: string]: {
        [exercise: string]: StrengthJournalDTO[]
    }
}

export const MOCK_GROUPED_JOURNALS: GroupedStrengthJournalsDTO =
{
    "03/22/23": {
        "Squat": [
            {
                "email": "example@email.com",
                "exercise": "Squat",
                "reps": 10,
                "weight": 225,
                "duration": 45,
                "intensity": 5,
                "entry_method": "Example hardcoded entry",
                "created_at": "2023-03-22T01:10:17+0000",
                "updated_at": "2023-03-22T01:10:17+0000",
            }
        ],
        "Bench Press": [
            {
                "email": "example@email.com",
                "exercise": "Bench Press",
                "reps": 10,
                "weight": 225,
                "duration": 45,
                "intensity": 5,
                "entry_method": "Example hardcoded entry",
                "updated_at": "2023-03-22T01:10:17+0000",
                "created_at": "2023-03-22T01:10:17+0000"
            }
        ]
    }
}