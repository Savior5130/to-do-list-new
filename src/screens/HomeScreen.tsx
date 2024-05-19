import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { Todo } from "../types";
import Todolist from "../components/Todolist";

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
`;

const StyledFlexContainer = styled.div`
  display: flex;
`;

const StyledRowContainer = styled(StyledFlexContainer)`
  flex-direction: row;
`;

const StyledColumnContainer = styled(StyledFlexContainer)`
  flex-direction: column;
`;

export default function HomeScreen() {
  const [todoData, settodoData] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");
  const titleInputRef = useRef<HTMLInputElement>(null);

  const onCreateTask = useCallback(() => {
    const newData: Todo = {
      title,
      dueDate: new Date(),
      status: "INCOMPLETE",
    };
    settodoData([...todoData, newData]);
    titleInputRef.current && (titleInputRef.current.value = "");
    setTitle("");
  }, [title, todoData]);

  return (
    <StyledContainer>
      <h1>To-do-list</h1>
      <p>This is a self-made practice app about todo-list</p>
      <StyledColumnContainer>
        <StyledRowContainer>
          <label>
            Task title
            <input
              ref={titleInputRef}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="E.g Fry and egg"
            />
          </label>
        </StyledRowContainer>
        <button disabled={title === ""} onClick={() => onCreateTask()}>
          Create Task
        </button>
      </StyledColumnContainer>
      <Todolist data={todoData} />
    </StyledContainer>
  );
}
