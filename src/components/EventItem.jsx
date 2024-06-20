import { Link } from "react-router-dom";
import { Box, Text, Image } from "@chakra-ui/react";
import PropTypes from "prop-types";

const EventItem = ({ event }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="4" m="2">
      <Link to={`/event/${event.id}`}>
        <Image
          src={event.image}
          alt={event.title}
          fit="cover"
          w="100%"
          h="200px"
        />
        <Box p="5">
          <Text fontWeight="bold" fontSize="xl">
            {event.title}
          </Text>
          <Text fontSize="md">{event.description}</Text>
          <Text fontSize="sm">
            Start: {new Date(event.startTime).toLocaleString()}
          </Text>
          <Text fontSize="sm">
            End: {new Date(event.endTime).toLocaleString()}
          </Text>
        </Box>
      </Link>
    </Box>
  );
};

EventItem.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventItem;
