import { connect } from 'react-redux'
import { Photo } from '../screens'
import { getSelectedPhoto } from '../selectors'

const PhotoContainer = connect(state => ({photo: getSelectedPhoto(state)}))(Photo)

export default PhotoContainer