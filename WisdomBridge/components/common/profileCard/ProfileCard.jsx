import React from 'react';
import { Image, Text} from '@rneui/themed';
import { View, TouchableOpacity} from 'react-native';

const ProfileCard = ({profile, onPress}) => {

    const name = profile.name

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{position:"relative",alignItems:"center"}}>
            <Image
                style={{width:"100%",height:100}}
                resizeMode="contain"
                source={{ uri: "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4" }}
            />
            <Text >{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProfileCard;