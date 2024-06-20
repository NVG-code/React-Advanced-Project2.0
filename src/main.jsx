import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventsPage from "./pages/EventsPage";
import EventPage from "./pages/EventPage";
import AddEventPage from "./pages/AddEventPage";
import Navigation from "./components/Navigation";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ChakraProvider>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<EventsPage />} />
        <Route path="/event/:eventId" element={<EventPage />} />
        <Route path="/add-event" element={<AddEventPage />} />
      </Routes>
    </Router>
  </ChakraProvider>
);
