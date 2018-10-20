import { createStackNavigator } from 'react-navigation'
import { PhtotosListContainer, PhotoContainer } from '../containers'

const MainNavigator = createStackNavigator({
    photoList:{
        screen: PhtotosListContainer,
    },
    photo: {
        screen: PhotoContainer,
        navigationOptions: {
            header: null
        }
    }
})

export default MainNavigator