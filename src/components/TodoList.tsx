import React from "react";
import { TodolistProps } from "../types";
import styled from "styled-components";

const StyledTodoContainer = styled.div`
  display: flex;
  min-height: 20px;
  margin: 20px;
`;

export default function Todolist({ data }: TodolistProps) {
  return (
    <>
      {data.length === 0 ? (
        <div>There's no data at the moment</div>
      ) : (
        data.map((todo) => (
          <StyledTodoContainer>Task-title: {todo.title}</StyledTodoContainer>
        ))
      )}
    </>
  );
}
