import {
  Badge,
  Box,
  Button,
  Checkbox,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Select,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";

export function ComponentFilterButton(props) {
  return (
    <Box>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList>
          <MenuItem type="button">All Tasks</MenuItem>
          <MenuItem type="button">Active Tasks</MenuItem>
          <MenuItem type="button">Completed Tasks</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

export function ComponentForm(props) {
  const [state, setState] = useState({
    task: "",
    priority: "",
  });

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(state);
    setState({
      task: "",
      priority: "",
    });
  }

  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit}>
      <Box display="flex" flexWrap="nowrap" gap="1rem" width="100%">
        <Input
          width="70%"
          variant="outline"
          placeholder="Add Task"
          type="text"
          name="task"
          value={state.task}
          onChange={handleChange}
        />
        <Select
          width="30%"
          variant="outline"
          placeholder="Priority"
          name="priority"
          value={state.priority}
          onChange={handleChange}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </Select>
        <Button colorScheme="green" type="submit">
          Add
        </Button>
      </Box>
    </form>
  );
}

export function ComponentListToDo(props) {
  let badgeColor = "";

  switch (props.priority) {
    case "Medium":
      badgeColor = "yellow";
      break;

    case "High":
      badgeColor = "red";
      break;
  
    default:
      badgeColor = "green";
      break;
  }

  return (
    <Box
      display="flex"
      flexWrap="nowrap"
      alignItems="center"
      borderWidth="1px"
      borderRadius="lg"
      padding="1rem"
      marginTop="1rem"
      htmlFor={props.id}
    >
      <Checkbox marginRight="0.5rem"></Checkbox>
      {props.name}
      <Badge px="2" marginLeft="0.5rem" colorScheme={badgeColor}>
        {props.priority}
      </Badge>
    </Box>
  );
}
