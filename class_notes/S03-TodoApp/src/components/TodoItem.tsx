import { DeleteOutline } from "@mui/icons-material";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import React from "react";

interface ITodoItemProps {
  todo: ITodo;
  toggleTodo: ToggleFn;
}

export default function TodoItem({ todo, toggleTodo }: ITodoItemProps) {
  return (
    <ListItem
      disableGutters
      sx={{
        padding: "1rem",
        cursor: "pointer",
      }}
      secondaryAction={
        <IconButton aria-label="coment">
          <DeleteOutline sx={{ "&:hover": { color: "red" } }} />
        </IconButton>
      }
    >
      <ListItemText primary={todo.task} />
    </ListItem>
  );
}
