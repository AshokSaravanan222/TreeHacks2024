import React from 'react'
import { Text} from '@rneui/themed'
import { View, TouchableOpacity} from 'react-native';

const QuestionCard = ({question, profile, onPress}) => {

    const questionText = question;
    const name = profile.name;

    return (
        <TouchableOpacity onPress={onPress}>
            <Text>{questionText}</Text>
            <Text>{name}</Text>
        </TouchableOpacity>
    )
}

export default QuestionCard;