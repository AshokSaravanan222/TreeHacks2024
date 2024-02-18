import React from 'react'
import { Text } from '@rneui/base'
import { StyleSheet } from 'react-native'
import { COLORS, FONT, SIZES} from '../../constants'

const Heading = ({text}) => {
  return (
    <Text style={styles.heading}>{text}</Text>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontWeight: 600
  }

})

export default Heading;

