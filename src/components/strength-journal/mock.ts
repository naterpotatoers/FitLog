// enum of muscle groups: Arms, Legs, Shoulders, Chest, Back, Core
enum MuscleGroup {
    Core = "Core",
    Legs = "Legs",
    Arms = "Arms",
    Back = "Back",
    Chest = "Chest",
    Shoulders = "Shoulders",
}

export const MOVEMENT_PATTERNS = [
    {
        id: "Bicep Curl",
        muscle_group: [MuscleGroup.Arms],
    },
    {
        id: "Chest Press",
        muscle_group: [MuscleGroup.Chest],
    },
    {
        id: "Deadlift",
        muscle_group: [MuscleGroup.Legs],
    },
    {
        id: "Shoulder Press",
        muscle_group: [MuscleGroup.Shoulders],
    },
    {
        id: "Squat",
        muscle_group: [MuscleGroup.Legs],
    },
    {
        id: "Tricep Extension",
        muscle_group: [MuscleGroup.Arms],
    },
];