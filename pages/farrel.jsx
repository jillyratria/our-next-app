import {
  ComponentFilterButton,
  ComponentForm,
  ComponentListToDo
} from "../components/ToDoFarrel";
import { ChakraProvider, Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function FarrelPage(props) {
  const [tasks = [], setTasks] = useState(props.tasks);

  const tasksNoun = tasks.length !== 1 ? 'tasks' : 'task';
  const headingText = `You have ${tasks.length} ${tasksNoun} remaining`;

  const taskList = tasks?.map((task) => (
    <ComponentListToDo
      id={task.id}
      name={task.name}
      priority={task.priority}
      key={task.id}
    ></ComponentListToDo>
  ));

  function addTask(value) {
    const randomId = Math.floor(Math.random() * 10);
    const newTask = { id: randomId, name: value.task, priority: value.priority };
    setTasks([...tasks, newTask]);
  }

  return (
    <ChakraProvider>
      <Flex
        flexDirection="column"
        justifyContent="center"
        height="100vh"
        width="50%"
        margin="auto"
      >
        <Text fontSize='xl' paddingBottom="1rem">{headingText}</Text>
        <Box display="flex" flexWrap="nowrap" gap="1rem">
          <ComponentFilterButton></ComponentFilterButton>
          <ComponentForm addTask={addTask}></ComponentForm>
        </Box>

        {taskList}
      </Flex>
    </ChakraProvider>
  );
}
