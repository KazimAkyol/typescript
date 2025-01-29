import { Container } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

export default function Home() {
  return (
    <Container>
      <Header />
      <AddTodo />
      <TodoList />
    </Container>
  );
}
