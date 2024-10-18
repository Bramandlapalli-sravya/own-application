import { RootState } from "@reduxjs/toolkit/query/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchHabits } from "./Store/Habit-slice.ts";
import { LinearProgress, Paper, Typography } from "@mui/material";

export const HabitStats = () => {

    const { isLoading, habits, error } = useSelector((state: any) => state.habits);
    const dispatch: any = useDispatch();

    useEffect(() => {
        dispatch(fetchHabits())
    }, [])

    if (isLoading) {
        return <LinearProgress />
    }

    if (error) {
        return <Typography variant="body2" color='error'>{error}</Typography>
    }

    const getCompletedToday = () => {
        const today = new Date().toISOString().split("T")[0];
        return habits.filter((habit) => habit.completedDates.includes(today)).length;
    }

    const getStreak = (habit) => {
        let streak = 0;
        let currentDate = new Date();
        console.log(currentDate.getDate(), 'currentDate');
        while (true) {
            const dateString = currentDate.toISOString().split("T")[0];
            if (habit.completedDates.includes(dateString)) {
                streak++;
                currentDate.setDate(currentDate.getDate() - 1);
            } else {
                break
            }
        }
        return streak;
    }

    const getLongestStreak = ()=> {
        return Math.max(...habits.map(getStreak));
    }

    return (
        <Paper elevation={2} sx={{ p: 2, mt: 4 }}>
            <Typography variant="h6">Habit Statistics</Typography>
            <Typography variant="body2">Total Habits: {habits.length} </Typography>
            <Typography variant="body2">Completed Today:{getCompletedToday()} </Typography>
            <Typography variant="body2">Longest Streak:{getLongestStreak()} </Typography>
        </Paper>
    );
}
