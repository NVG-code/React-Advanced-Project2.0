import { Link } from "react-router-dom";
import { Box, Flex, Spacer, Button } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Flex p="4" bg="blue.500" color="white">
      <Box p="2">
        <Link to="/">
          <Button colorScheme="teal">Events</Button>
        </Link>
      </Box>
      <Spacer />
      <Box p="2">
        <Link to="/add-event">
          <Button colorScheme="teal">Add Event</Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
