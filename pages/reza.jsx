import cn from "classnames";
import { ChakraProvider, Input, Heading, Center, Button, Container, ListItem, ListIcon, List, MdCheckCircle } from '@chakra-ui/react';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoPage() {
  const [toDoItem, setToDoItem] = useState("");
  const [items, setItems] = useState([
    {
      id:"1234",
      message:"first list",
      status: false,
    }
  ]);
  const handleAdd = () => {
    if (toDoItem){
      setItems([{
        id: uuidv4,
        message: toDoItem,
        status: false
      }, ... items]);
      setToDoItem("");
    }
  };
  const handleToggle = (id) => {
    const _items = items.map((item) => {
      if(item.id === id){
        return {
          ... item,
          status: !item.done,  
        };
      }
      return item;
    });

    setItems(_items);
  };
  return (
  <ChakraProvider>
    <Center h='320px' color='black'>
      <Container maxW='md' color='black'>
        <Heading as='h1' size='md' pb={2}>
          TO DO
        </Heading>
        <Input placeholder='Create a new todo...' 
          size='sm'
          type="text" 
          value={toDoItem} 
          onChange={(e) => setToDoItem(e.target.value)} />
        <Button colorScheme='teal' 
          mt={2} mb={2} size='sm' 
          type="submit" 
          onClick={handleAdd}>
          Add
        </Button>
        <List spacing={2}>
          {items.map(({id, message, status}) => (
            <ListItem key={id} 
            onClick={() => handleToggle(id)} 
            className={cn("item", { status })}>
              <ListIcon as={MdCheckCircle} color='green.500' />
              {message}
            </ListItem>
          ))}
        </List>
      </Container>
    </Center>
  </ChakraProvider>
    
  );
}
