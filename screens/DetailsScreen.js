import React from 'react';
import { View, Text, StyleSheet, Image, Button, Linking, ScrollView } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { article } = route.params;

  const handlePress = () => {
    Linking.openURL(article.url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={article.image} style={styles.image} />
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.content}>{article.content}</Text>
      <Button title="Подробнее" onPress={handlePress} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  content: {
    fontSize: 18,
    color: '#666',
    marginBottom: 16,
  },
});

export default DetailsScreen;
