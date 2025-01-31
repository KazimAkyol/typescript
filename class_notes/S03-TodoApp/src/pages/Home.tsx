import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import AddTodo from "../components/AddTodo";
import axios from "axios";
import TodoList from "../components/TodoList";

// interface ITodo {
//   task: string;
//   isDone: boolean;
//   id: string;
// }

const url = "https://64ecd95ff9b2b70f2bfb0943.mockapi.io/todos";

export default function Home() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const getTodos = async () => {
    try {
      const { data } = await axios(url);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo: AddFn = async (task) => {
    try {
      await axios.post(url, { task, isDone: false });

      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTodo: ToggleFn = async (todo) => {
    try {
      await axios.put(`${url}/${todo.id}`, { ...todo, isDone: !todo.isDone });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <Header />
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </Container>
  );
}
