import { useState } from "react";
import InputSelect from "../../common/InputSelect";
import InputSlider from "../../common/InputSlider";
import InputStandard from "../../common/InputStandard";
import {
  MOCK_NUTRITION_JOURNAL,
  NutritionJournalDto,
} from "../../dto/NutritionJournal.dto";
import { MEAL_TYPES } from "./constants";

export default function AddNutritionEntry() {
  const [journal, setJournal] = useState<NutritionJournalDto>(
    MOCK_NUTRITION_JOURNAL
  );
  return (
    <div>
      <h2 className="title">Add Nutrition Entry</h2>
      <form className="card">
        <InputSelect
          name="type"
          label="Type"
          options={MEAL_TYPES}
          onChange={(e) => setJournal({ ...journal, type: e.target.value })}
        />
        <InputStandard
          name="name"
          value={journal.name}
          label="Name"
          placeholder="Enter a name"
          datalist={[]}
          onChange={(e) => setJournal({ ...journal, name: e.target.value })}
        />
        <InputSlider
          label="Calories"
          name="calories"
          value={journal.calories}
          min={0}
          max={1000}
          onChange={(e) =>
            setJournal({ ...journal, calories: parseInt(e.target.value) })
          }
        />
      </form>
    </div>
  );
}
