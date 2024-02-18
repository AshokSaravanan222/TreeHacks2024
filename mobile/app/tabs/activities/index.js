import React from 'react';
import { Text, View, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { Image } from '@rneui/themed'; // Make sure you have this import for the Image component

const Activities = () => {
  const Activity = ({ name, description, imageUrl }) => {
    return (
      <View style={styles.activityContainer}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.activityImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.activityName}>{name}</Text>
          <Text style={styles.activityDescription}>{description}</Text>
        </View>
      </View>
    );
  };

  const activityData = {
    "items": [
      {
        "id": "activity1",
        "description": "Join us for a fun game of tennis!",
        "topic": "Tennis",
        "image": "https://images.squarespace-cdn.com/content/v1/51f7fb1ee4b03d20c9b4c34b/1391517568123-8S0ZR6MB6G2FKKG5QIJR/cookbook-dumplings.jpg?format=2500w"
      },
      {
        "id": "activity2",
        "description": "Let's play soccer together!",
        "topic": "Soccer",
        "image": "https://images.squarespace-cdn.com/content/v1/51f7fb1ee4b03d20c9b4c34b/1391517568123-8S0ZR6MB6G2FKKG5QIJR/cookbook-dumplings.jpg?format=2500w"
      }
    ]
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={activityData.items}
        renderItem={({ item }) => (
          <Activity
            id={item.id}
            name={item.topic}
            description={item.description}
            imageUrl={item.image}
          />
        )}
        keyExtractor={item => item.id}
        ListHeaderComponent={<Text style={styles.headerText}>These are the activities</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  activityContainer: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginBottom: 10, // Add some space between items
  },
  activityImage: {
    width: '100%',
    height: 200, // Fixed height for uniformity
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  textContainer: {
    padding: 10,
  },
  activityName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  activityDescription: {
    fontSize: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
});

export default Activities;