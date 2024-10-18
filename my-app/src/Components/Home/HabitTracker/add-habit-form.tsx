import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addHabit } from "./Store/Habit-slice.ts";
import HabitList from "./habit-list.tsx";
import { HabitStats } from "./habit-stats.tsx";

const AddHabitForm = () => {

    const disapatch = useDispatch();

    const [name, setName] = useState('');
    const [frequency, setFrequency] = useState<'daily' | 'weekly'>('daily');

    const listItems = useSelector((state: any) => state.habits.habits);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        disapatch(addHabit({ name, frequency }))
        setName('');
    }

    console.log(listItems, "listItems");

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2
            }}>
                <TextField label='Habit Name' value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter Habit Name" />
                <FormControl>
                    <InputLabel>Frequency</InputLabel>
                    <Select value={frequency} onChange={(e) => { setFrequency(e.target.value as 'daily' | 'weekly') }}>
                        <MenuItem value="Daily">Daily</MenuItem>
                        <MenuItem value="Weekly">Weekly</MenuItem>
                    </Select>
                    <Button type="submit" variant='contained' color='primary'>Add Habit</Button>
                </FormControl>
                <HabitList listItems={listItems} />
                <HabitStats />
            </Box>
        </form>
    )
}

export default AddHabitForm;