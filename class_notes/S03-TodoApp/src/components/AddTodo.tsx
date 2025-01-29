import { Box, Button, TextField } from '@mui/material'
import React from 'react'

export default function AddTodo() {
  return (
    <Box
    component="form"
    sx={{
        display: {xs:"block", sm:"flex"}
    }}
    >
        <TextField/>
        <Button>Save Todo</Button>
    </Box>
  )
}
