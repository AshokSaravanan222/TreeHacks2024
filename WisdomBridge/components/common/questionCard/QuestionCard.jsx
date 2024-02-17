import React from 'react'
import { Text } from '@rneui/themed'

const QuestionCard = ({question, profile}) => {

    const questionText = question;
    const name = profile.name;

    return (
        <View>
            <Text>{questionText}</Text>
            <Text>{name}</Text>
        </View>
    )
}

export default QuestionCard;