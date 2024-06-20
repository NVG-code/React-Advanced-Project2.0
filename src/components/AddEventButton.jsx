import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const AddEventButton = () => {
  return (
    <Link to="/add-event">
      <Button colorScheme="blue">Add Event</Button>
    </Link>
  );
};

export default AddEventButton;
