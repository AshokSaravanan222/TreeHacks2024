import React from 'react'
import { Text } from '@rneui/themed'
import { View, StyleSheet } from 'react-native'

const Tag = ({text}) => {
  return (
    <View style={styles.tagsContainer}>
        <Text style={styles.tags}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    tags: {
        backgroundColor: COLORS.primary, // Use the primary color from your constants
        paddingHorizontal: 8, // Use minimal horizontal padding
        paddingVertical: 4, // Use minimal vertical padding for spacing
        margin: 5, // Optional: add margin to separate it from other components
        borderRadius: 5, // Optional: add rounded corners for a smoother look
        borderWidth: 1, // Add a border for the bordered look
        borderColor: 'rgba(0, 0, 0, 0.1)', // Slightly visible border
        alignSelf: 'flex-start', // Align to the start of the flex container
      },
      tagsContainer: {
        flexDirection: 'row', // Align tags horizontally
        flexWrap: 'wrap', // Allow tags to wrap to the next line
        // Add padding or margin if needed to adjust the spacing inside or outside the container
      },
})


export default Tag
