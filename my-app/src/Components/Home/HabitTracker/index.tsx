import { Container, Typography } from "@mui/material"
import React from "react"
import AddHabitForm from "./add-habit-form.tsx"

export const HabitTracker = () => {
    return (
        <Container maxWidth='md'>
            <Typography variant="h2" align='center'>Habit Tracker</Typography>
            <AddHabitForm />
        </Container>
    )
}