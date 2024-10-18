import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Habit {
  id: string | number;
  name: string;
  frequency: "daily" | "weekly" | "monthly";
  date?: string;
  completedDates: string[];
  createAt: boolean | any;
}

interface HabitState {
  habits: Habit[];
  isLoading: boolean;
  error: string | null;
}

const initialState: HabitState = {
  habits: [],
  isLoading: false,
  error: null,
};

console.log(Date.now().toString(), "Date.now().toString()");
console.log(new Date().toISOString(), "Date().toISOString()");

export const fetchHabits = createAsyncThunk("habits/fetchHabits", async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const mockHabits: Habit[] = [
    {
      id: 1,
      name: "Drink Water",
      frequency: "daily",
      completedDates: [],
      createAt: new Date().toISOString(),
    },
    {
      id: 2,
      name: "Read Books",
      frequency: "weekly",
      completedDates: [],
      createAt: new Date().toISOString(),
    },
    {
      id: 3,
      name: "Workout",
      frequency: "monthly",
      completedDates: [],
      createAt: new Date().toISOString(),
    },
  ];

  return mockHabits;
});

const HabitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (
      state,
      action: PayloadAction<{ name: string; frequency: "daily" | "weekly" }>
    ) => {
      const newHabit: Habit = {
        id: Date.now().toString(),
        name: action.payload.name,
        frequency: action.payload.frequency,
        completedDates: [],
        createAt: new Date().toISOString(),
      };

      state.habits.push(newHabit);
    },

    toggleHabit: (
      state,
      action: PayloadAction<{ id: string; date: string }>
    ) => {
      const habit = state.habits.find(
        (habit) => habit.id === action.payload.id
      );

      if (habit) {
        const index = habit.completedDates.indexOf(action.payload.date);
        if (index > -1) {
          habit.completedDates.splice(index, 1);
        } else {
          habit.completedDates.push(action.payload.date);
        }
      }
    },

    removeHabit: (state, action: PayloadAction<{ id: string }>) => {
      const removeItem = state.habits.findIndex(
        (habit) => habit.id !== action.payload.id
      );

      state.habits.splice(removeItem, 1);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchHabits.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchHabits.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchHabits.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "failed while fetching data";
    });
  },
});

export const { addHabit, toggleHabit, removeHabit } = HabitSlice.actions;
export default HabitSlice.reducer;
