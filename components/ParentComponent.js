import React from 'react';
import { View, StyleSheet } from 'react-native';
import EventCard from './EventCard';

const ParentComponent = () => {
    // Функция onBook, которая будет вызываться при бронировании мероприятия для более лучшей оптимизаций
  const handleBooking = (event) => {
    // Действия при бронировании мероприятия для производительности
  };

  return (
    <View style={styles.container}>
      {/* Использование EventCard и передача функции onBook в качестве пропса */}
      <EventCard event={item} onBook={handleBooking} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ParentComponent;
