import React from 'react';
import {Text} from '@rneui/themed';
import { View, TouchableOpacity, Image} from 'react-native';

const ProfileCard = ({profile, onPress}) => {

    const name = profile.name

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{position:"relative",alignItems:"center"}}>
            <Image
                style={{width:"100%",height:100}}
                resizeMode="contain"
                source={{ uri: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg" }}
            />
            <Text >{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProfileCard;