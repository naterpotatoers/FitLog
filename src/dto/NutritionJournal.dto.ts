export type NutritionJournalDto = {
  id: string;
  email: string;
  type: string;
  name: string;
  calories: number;
  created_at: string;
  updated_at: string;
};

export let DEFAULT_NUTRITION_JOURNAL: NutritionJournalDto = {
  id: "",
  email: "",
  type: "",
  name: "",
  calories: 0,
  created_at: "",
  updated_at: "",
};

export let MOCK_NUTRITION_JOURNAL: NutritionJournalDto = {
  id: "1",
  email: "nate@email.com",
  type: "Breakfast",
  name: "Eggs",
  calories: 100,
  created_at: "2023-06-29T19:03:21.873Z",
  updated_at: "2023-06-29T19:03:21.873Z",
};

export let MOCK_NUTRITION_JOURNAL_ENTRIES: NutritionJournalDto[] = [
  {
    id: "1",
    email: "nate@email.com",
    type: "Breakfast",
    name: "Eggs",
    calories: 100,
    created_at: "2023-06-29T19:03:21.873Z",
    updated_at: "2023-06-29T19:03:21.873Z",
  },
  {
    id: "2",
    email: "nate@email.com",
    type: "Breakfast",
    name: "Oatmeal",
    calories: 300,
    created_at: "2023-06-29T19:03:21.873Z",
    updated_at: "2023-06-29T19:03:21.873Z",
  },
  {
    id: "3",
    email: "nate@email.com",
    type: "Breakfast",
    name: "Toast",
    calories: 200,
    created_at: "2023-06-29T19:03:21.873Z",
    updated_at: "2023-06-29T19:03:21.873Z",
  },
  {
    id: "4",
    email: "nate@email.com",
    type: "Lunch",
    name: "Salad",
    calories: 100,
    created_at: "2023-06-29T19:03:21.873Z",
    updated_at: "2023-06-29T19:03:21.873Z",
  },
  {
    id: "5",
    email: "nate@email.com",
    type: "Lunch",
    name: "Tuna",
    calories: 300,
    created_at: "2023-06-29T19:03:21.873Z",
    updated_at: "2023-06-29T19:03:21.873Z",
  },
  {
    id: "6",
    email: "nate@email.com",
    type: "Lunch",
    name: "Bread",
    calories: 200,
    created_at: "2023-06-29T19:03:21.873Z",
    updated_at: "2023-06-29T19:03:21.873Z",
  },
  {
    id: "7",
    email: "nate@email.com",
    type: "Dinner",
    name: "Pasta Dish",
    calories: 1200,
    created_at: "2023-06-29T19:03:21.873Z",
    updated_at: "2023-06-29T19:03:21.873Z",
  },
];
