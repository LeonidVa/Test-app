import { getPhotos as getPhotosManager } from '../managers'

export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST'
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS'
export const GET_PHOTOS_FAILURE = 'GET_PHOTOS_FAILURE'
export const SELECT_PHOTO = 'SELECT_PHOTO'

export const getPhotosRequest = payload => ({type: GET_PHOTOS_REQUEST, payload})
export const getPhotosSuccess = payload => ({type: GET_PHOTOS_SUCCESS, payload})
export const getPhotosFailure = payload => ({type: GET_PHOTOS_FAILURE, payload})
export const selectPhoto = payload => ({type: SELECT_PHOTO, payload})

export const getPhotos = () => dispatch => {
    dispatch(getPhotosRequest())
    try {
    getPhotosManager().then(data => dispatch(getPhotosSuccess(data)))
    }
    catch(ex) {
        dispatch(getPhotosFailure())
    }
}