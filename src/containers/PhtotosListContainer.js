import { connect } from 'react-redux'
import { PhotoList } from '../screens'
import { getPhotos, selectPhoto } from '../actions'
import { getAllPhotos, getIsLoading } from '../selectors'

const PhotoListContainer = connect(state => (
    {
        photos: getAllPhotos(state),
        isLoading: getIsLoading(state)
    }), { getPhotos, selectPhoto })(PhotoList)

export default PhotoListContainer