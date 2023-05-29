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
        acc[date][workout.exercise].sort((a, b) => {
            return new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        })
        return acc
    }, {} as any)
    return result
}