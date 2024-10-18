import { Box, Button, Grid, LinearProgress, Paper, Typography } from "@mui/material";
import React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import { removeHabit, toggleHabit } from "./Store/Habit-slice.ts";

const HabitList = ({ listItems }) => {
    const dispatch = useDispatch();

    const today = new Date().toISOString().split("T")[0];

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

    return (
        <div>
            {listItems.map((habit) => {
                return (
                    <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
                        <Grid container justifyContent='space-between' alignItems={'center'}>
                            <Grid item>
                                <Typography variant="h6">{habit.name}</Typography>
                                <Typography variant="body2" color='text.secoundary' sx={{ textTransform: 'capitalize' }}>{habit.frequency}</Typography>
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                                    <Button variant='outlined' color={habit.completedDates.includes(today) ? 'success' : 'primary'} startIcon={<CheckCircleIcon />} onClick={() => dispatch(toggleHabit({ id: habit.id, date: today }))}>{habit.completedDates.includes(today) ? 'Completed' : 'Mark as Complete'} </Button>
                                    <Button variant='contained' color='error' startIcon={<DeleteIcon />} onClick={() => dispatch(removeHabit({ id: habit.id }))}>Delete</Button>
                                </Box>
                            </Grid>
                        </Grid>
                        <Box sx={{ mt: 2 }}>
                            <Typography variant='body2' color='text.secoundary'>Streak: {getStreak(habit)} day</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={(getStreak(habit) / 30) * 100} />
                    </Paper>
                )
            })}
        </div>
    )
}

export default HabitList;