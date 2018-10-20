import React from 'react'
import { Text } from 'react-native'
import Image from 'react-native-image-progress'

class Photo extends React.Component {
    constructor() {
        super()

        this.state = {
            showSlideInfo : true
        }
    }
    render() {
        const {photo: {urls: {full}}} = this.props
        const { showSlideInfo } = this.state
        return (<React.Fragment>
        <Image source={{uri: full}} style={{flex: 1}}/>
        {showSlideInfo && <Text style={{color: '#fff', fontSize: 35, position: 'absolute', bottom: 5, alignSelf: 'center'}}>Swipe left to back</Text>}
     </React.Fragment>)
    
    }

    componentDidMount() {
        setTimeout(() => {this.setState({showSlideInfo: false})}, 10000)
    }
}

export default Photo