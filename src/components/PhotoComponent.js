import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import Image from 'react-native-image-progress'

const PhotoComponent = ({navigation: { navigate }, selectPhoto, item: { id, urls : { thumb }, user: { name, username }  } }) =>{
    return(
<TouchableOpacity onPress={() => {
    selectPhoto(id)
    navigate('photo')
}} style={{ padding: 10, 
        margin: 5, flexDirection: 'row' }}>
    <Image source={{ uri: thumb }} style={{width: 50, height: 50}}/>
    <View style={{marginLeft: 10}}>
        <Text style={{color: 'gray'}}>{username}</Text>
        <Text>{name}</Text>
    </View>

</TouchableOpacity>)}

export default PhotoComponent