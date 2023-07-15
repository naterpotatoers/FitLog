import { useState } from "react";
import {
  DEFAULT_STRENGTH_JOURNAL,
  StrengthJournalDTO,
} from "../../dto/StrengthJournal.dto";
import { MOCK_EXERCISES } from "../../dto/Exercise.dto";
import { createStrengthJournalEntry } from "../../api/journals.api";
import InputSlider from "../../common/InputSlider";
import InputStandard from "../../common/InputStandard";

export default function AddStrengthSet({ setJournals }) {
  const [journal, setJournal] = useState<StrengthJournalDTO>(
    DEFAULT_STRENGTH_JOURNAL
  );

  const uploadJournal = async (e) => {
    e.preventDefault();
    await createStrengthJournalEntry(journal);
    setJournals((journals) => {
      return [journal, ...journals];
    });
  };

  return (
    <div className="grid">
      <h2 className="title">Add Strength Set</h2>
      <form className="card">
        <InputStandard
            name="exercise"
            value={journal.exercise}
            label="Exercise"
            placeholder="Enter an exercise"
            datalist={MOCK_EXERCISES}
            onChange={(e) =>
                setJournal({ ...journal, exercise: e.target.value })
            }
        />
        <InputStandard
          name="movement_pattern"
          value={journal.movement_pattern}
          label="Movement Pattern"
          placeholder="Enter a movement pattern"
          datalist={MOCK_EXERCISES}
          onChange={(e) =>
            setJournal({ ...journal, movement_pattern: e.target.value })
          }
        />
        <InputStandard
          name="variation"
          value={journal.variation}
          label="Variation"
          placeholder="Enter a variation"
          datalist={MOCK_EXERCISES}
          onChange={(e) =>
            setJournal({ ...journal, variation: e.target.value })
          }
        />

        <InputSlider
          label="Reps"
          name="reps"
          value={journal.reps}
          min={1}
          max={30}
          onChange={(e) =>
            setJournal({ ...journal, reps: parseInt(e.target.value) })
          }
        />
        <InputSlider
          label="Weight"
          name="weight"
          value={journal.weight}
          min={0}
          max={500}
          onChange={(e) =>
            setJournal({ ...journal, weight: parseInt(e.target.value) })
          }
        />
        <InputSlider
          label="Duration"
          name="duration"
          value={journal.duration}
          min={0}
          max={120}
          onChange={(e) =>
            setJournal({ ...journal, duration: parseInt(e.target.value) })
          }
        />
        <button onClick={uploadJournal}>Add Workout</button>
      </form>
    </div>
  );
}
