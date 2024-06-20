import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Text, Button, Image, useToast } from "@chakra-ui/react";

const EventPage = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/events/${eventId}`)
      .then((response) => response.json())
      .then((data) => setEvent(data))
      .catch((error) => console.error("Error fetching event:", error));
  }, [eventId]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/events/${eventId}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete the event");
      toast({
        title: "Event deleted successfully!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      navigate("/");
    } catch (error) {
      toast({
        title: "Failed to delete event",
        description: error.message,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  if (!event) return <Text>Loading...</Text>;

  return (
    <Box padding="6" boxShadow="lg" rounded="md">
      <Image
        src={event.image}
        alt={event.title}
        boxSize="300px"
        objectFit="cover"
      />
      <Text fontSize="2xl" fontWeight="bold">
        {event.title}
      </Text>
      <Text>{event.description}</Text>
      <Text>Start Time: {new Date(event.startTime).toLocaleString()}</Text>
      <Text>End Time: {new Date(event.endTime).toLocaleString()}</Text>
      <Button colorScheme="red" onClick={handleDelete}>
        Delete Event
      </Button>
    </Box>
  );
};

export default EventPage;
