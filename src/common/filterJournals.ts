import { StrengthJournalDTO } from "../dto/StrengthJournal.dto";
import { GroupedStrengthJournalsDTO } from "../dto/GroupedStrengthJournals.dto";
import { formatCreatedDate } from "./formatCreatedDate";

export function filterStrengthJournals(workouts: StrengthJournalDTO[]): GroupedStrengthJournalsDTO[] {
    const result = workouts.reduce((acc, workout) => {
        let date = formatCreatedDate(workout.created_at)
        if (!acc[date]) {
            acc[date] = {}
        }
        if (!acc[date][workout.exercise]) {
            acc[date][workout.exercise] = []
        }
        acc[date][workout.exercise].push(workout)
        return acc
    }, {} as any)
    return result
}