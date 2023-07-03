import { useState, useRef, useEffect } from "react";
import { getUserStrengthJournals } from "../../api/journals.api";
import { filterStrengthJournals } from "../../common/filterJournals";
import {
  MOCK_STRENGTH_JOURNAL_ENTRIES,
  StrengthJournalDTO,
} from "../../dto/StrengthJournal.dto";
import AddStrengthSet from "../forms/AddStrengthSet";
import UpdateStrengthSetDialog from "../forms/UpdateStrengthSetDialog";
import WorkoutHistoryFilter from "./WorkoutHistoryFilter";

export default function WorkoutHistory() {
  const [journals, setJournals] = useState<StrengthJournalDTO[]>(
    MOCK_STRENGTH_JOURNAL_ENTRIES
  );
  const originalJournals = useRef<StrengthJournalDTO[]>(
    MOCK_STRENGTH_JOURNAL_ENTRIES
  );
  const [dialogHandler, setDialogHandler] = useState({
    state: "closed",
    id: "",
  });

  const groupedWorkouts = filterStrengthJournals(journals);

  const handleJournalFilter = (e) => {
    const filter = e.target.value;
    if (filter === "") {
      setJournals(originalJournals.current);
    } else {
      const filteredJournals = originalJournals.current.filter((journal) => {
        return journal.exercise === filter;
      });
      setJournals(filteredJournals);
    }
  };

  const handleUpdateWorkout = (e) => {
    setDialogHandler({
      state: "editing",
      id: e.target.id,
    });
  };

    // comment out the following useEffect to use the mock data
  useEffect(() => {
    const getJournals = async () => {
      const result = await getUserStrengthJournals()
      setJournals(result)
      originalJournals.current = result
    }
    getJournals()
  }, [])

  return (
    <div className="grid">
      <h2 className="title">Workout History</h2>
      <AddStrengthSet setJournals={setJournals} />
      <WorkoutHistoryFilter handleJournalFilter={handleJournalFilter} />
      {dialogHandler.state === "editing" && (
        <UpdateStrengthSetDialog
          dialogHandler={dialogHandler}
          setDialogHandler={setDialogHandler}
          journals={journals}
          setJournals={setJournals}
        />
      )}

      {Object.keys(groupedWorkouts).map((date) => {
        return (
          <div key={date} className="strength-journal-workout">
            <h3 className="sticky">{date}</h3>
            <div className="border">
              {Object.keys(groupedWorkouts[date]).map((exercise) => {
                return (
                  <div
                    key={date + exercise}
                    className="strength-journal-exercise"
                  >
                    <h4 className="">{exercise}</h4>
                    {groupedWorkouts[date][exercise].map(
                      (workout: StrengthJournalDTO) => {
                        return (
                          <div
                            key={workout.id}
                            className="strength-journal-set"
                          >
                            <p>{workout.reps}</p>
                            <p>{workout.weight}lbs</p>
                            <p>{workout.duration}s</p>
                            <div className="row">
                              <button
                                className="edit-button"
                                id={workout.id}
                                onClick={handleUpdateWorkout}
                              >
                                &#xFE19;
                              </button>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
