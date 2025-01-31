import { DeleteOutline } from "@mui/icons-material";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import React from "react";

interface ITodoItemProps {
  todos: ITodo;
}

export default function TodoItem({ todo }: ITodoItemProps) {
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
