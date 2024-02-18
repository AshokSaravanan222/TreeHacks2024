import React from 'react';
import { Button, Icon} from '@rneui/themed';

const NextButton = ({ navigateTo }) => {
  return (
    <Button
      icon={
        <Icon
          name="arrow-right"
          size={15}
          color="white"
        />
      }
      title=" Next" // Space before "Next" ensures icon and text aren't too close
      onPress={navigateTo}
    />
  );
};

export default NextButton;
