import { Save } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

interface IAddTodoProps {
  addTodo: AddFn;
}

export default function AddTodo({ addTodo }: IAddTodoProps) {
  // const [task, setTask] = useState<string>(""); //! her zaman type belirtmemize gerek yok. Typescript type inference özelliği sayesinde inital değerine göre otomatik type ataması yapıyor.
  const [task, setTask] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setTask(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(task);
    setTask("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      //   onSubmit = {(e)=> console.log(e.target)}
      sx={{
        display: { xs: "block", sm: "flex" },
        justifyContent: { xs: "flex-start", sm: "center" },
        m: { xs: 1, sm: "auto" },
        height: { xs: "120px", sm: "80px" },
      }}
    >
      <TextField
        variant="outlined"
        color="success"
        sx={{
          minWidth: { xs: "100%", sm: "50%" },
          height: "50px",
          m: 1,
        }}
        // onChange={(e)=>console.log(e.target.value)}
        onChange={handleChange}
        value={task}
      />
      <Button
        type="submit"
        variant="contained"
        endIcon={<Save />}
        color="success"
        sx={{
          minWidth: { xs: "100%", sm: "15%" },
          height: "55px",
          m: 1,
        }}
      >
        Save Todo
      </Button>
    </Box>
  );
}
