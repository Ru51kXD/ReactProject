import React from "react";
import { FlatList } from "react-native";
import EventCard from "./EventCard";

const EventList = ({ events, onBook }) => {
  return (
    <FlatList
      data={events}
      renderItem={({ item }) => <EventCard event={item} onBook={onBook} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default EventList;
