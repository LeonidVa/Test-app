import React from 'react'
import { FlatList } from 'react-native'
import { PhotoComponent } from '../components'

const getId = obj => obj.id

class PhotoList extends React.Component {
    render() {
        const { photos, isLoading, getPhotos, navigation, selectPhoto } = this.props
        return (  
         <FlatList onRefresh={getPhotos}
                    refreshing={isLoading}
                   style={{ flex: 1 }} 
                   data={photos} 
                   keyExtract={getId} 
                   renderItem={props => <PhotoComponent selectPhoto={selectPhoto} navigation={navigation} {...props}/>} />
        )
    }

    componentDidMount() {
        const { getPhotos } = this.props
        getPhotos()
    }
}

export default PhotoList