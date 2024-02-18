import React from 'react'
import { Button } from '@rneui/themed'
import { COLORS } from '../../constants';

const ActionButton = ({text, buttonColor, onPress, isLoading}) => {
  return (
    <Button
        buttonStyle={{ width: 100, height: 50, backgroundColor: buttonColor }}
        containerStyle={{ margin: 5, borderRadius: 10 }}
        disabledStyle={{
          borderWidth: 2,
          borderColor: COLORS.tertiary
        }}
        disabledTitleStyle={{ color: COLORS.tertiary }}
        iconContainerStyle={{ background: '#000' }}
        loading={isLoading} // Use the isLoading state
        onPress={onPress} // Use the new handlePress function
        title={text} // Hide title when loading
        titleStyle={{ marginHorizontal: 5 }}
      />
  )
}

export default ActionButton