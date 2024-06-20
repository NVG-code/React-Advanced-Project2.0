import { useState } from "react";
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  Textarea,
  useToast,
} from "@chakra-ui/react";

const AddEventPage = () => {
  const [event, setEvent] = useState({
    title: "test",
    description: "",
    startTime: "",
    endTime: "",
    image: "",
  });
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(event),
      });
      if (!response.ok) throw new Error("Failed to create event");
      toast({
        title: "Event created successfully!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error adding event:", error);
      toast({
        title: "Failed to create event",
        description: error.message,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <FormControl
      as="form"
      onSubmit={handleSubmit}
      padding="6"
      boxShadow="lg"
      rounded="md"
    >
      <FormLabel htmlFor="title">Title</FormLabel>
      <Input
        id="title"
        type="text"
        value={event.title}
        onChange={(e) => setEvent({ ...event, title: e.target.value })}
      />
      <FormLabel htmlFor="description">Description</FormLabel>
      <Textarea
        id="description"
        value={event.description}
        onChange={(e) => setEvent({ ...event, description: e.target.value })}
      />
      <FormLabel htmlFor="startTime">Start Time</FormLabel>
      <Input
        id="startTime"
        type="datetime-local"
        value={event.startTime}
        onChange={(e) => setEvent({ ...event, startTime: e.target.value })}
      />
      <FormLabel htmlFor="endTime">End Time</FormLabel>
      <Input
        id="endTime"
        type="datetime-local"
        value={event.endTime}
        onChange={(e) => setEvent({ ...event, endTime: e.target.value })}
      />
      <FormLabel htmlFor="image">Image URL</FormLabel>
      <Input
        id="image"
        type="text"
        value={event.image}
        onChange={(e) => setEvent({ ...event, image: e.target.value })}
      />
      <Button mt={4} colorScheme="blue" type="submit">
        Add Event
      </Button>
    </FormControl>
  );
};

export default AddEventPage;
