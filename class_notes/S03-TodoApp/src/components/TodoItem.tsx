import { DeleteOutline } from "@mui/icons-material";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import React from "react";

interface ITodoItemProps {
  todo: ITodo;
  toggleTodo: ToggleFn;
  deleteTodo: DeleteFn;
}

export default function TodoItem({
  todo,
  toggleTodo,
  deleteTodo,
}: ITodoItemProps) {
  return (
    <ListItem
      disableGutters
      sx={{
        padding: "1rem",
        cursor: "pointer",
      }}
      secondaryAction={
        <IconButton aria-label="coment">
          <DeleteOutline
            sx={{ "&:hover": { color: "red" } }}
            onClick={() => deleteTodo(todo.id)}
          />
        </IconButton>
      }
    >
      <ListItemText onClick={() => toggleTodo(todo)} primary={todo.task} />
    </ListItem>
  );
}
