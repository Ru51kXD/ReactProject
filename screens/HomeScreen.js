import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  const [news, setNews] = useState([
    {
      id: 1,
      title: "Football Championship",
      shortDescription: "The football championship will take place next week.",
      content:
        "The football championship will take place next week in the city stadium. Teams from all over the country will compete for the championship title. The event is expected to attract thousands of fans.",
      url: "https://sportkhan.netlify.app",
      // imageUrl: "https://media.statbet.com/crop_27615510_f167c43677jpeg",
      image: require("../assets/images/Fight.jpg"),
    },
    {
      id: 2,
      title: "Basketball Tournament",
      shortDescription:
        "The regional basketball tournament starts this weekend.",
      content:
        "The regional basketball tournament starts this weekend with teams from all over the region. This tournament is known for its high level of competition and exciting matches.",
      url: "https://sportkhan.netlify.app",
      image: require("../assets/images/FirstMatch.png"),
    },
    {
      id: 3,
      title: "Marathon",
      shortDescription: "The annual city marathon will be held on Sunday.",
      content:
        "The annual city marathon will be held on Sunday. The marathon will cover a distance of 42.195 kilometers, starting from the city center and passing through several landmarks. Come and support the runners!",
      url: "https://sportkhan.netlify.app",
      image: require("../assets/images/Football.png"),
    },
    {
      id: 4,
      title: "Tennis Open",
      shortDescription:
        "The tennis open tournament will see players from around the world.",
      content:
        "The tennis open tournament will see players from around the world competing for the title. The tournament will be held over two weeks and promises thrilling matches.",
      url: "https://sportkhan.netlify.app",
      image: require("../assets/images/UFC.png"),
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Details", { article: item })}
          >
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.shortDescription}>
                {item.shortDescription}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  image: {
    width: "100%",
    height: 200,
  },
  textContainer: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  shortDescription: {
    fontSize: 16,
    color: "#555",
  },
});

export default HomeScreen;
