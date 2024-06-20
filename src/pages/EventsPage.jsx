import { useState, useEffect } from "react";
import { Box, Input, Heading } from "@chakra-ui/react";
import EventItem from "../components/EventItem";

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((response) => response.json())
      .then((data) => setEvents(data.events || data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box padding="6">
      <Heading mb="4">List of Events</Heading>
      <Input
        placeholder="Search events"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        mb="4"
      />
      {filteredEvents.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </Box>
  );
};

export default EventsPage;
