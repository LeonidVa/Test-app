import { combineReducers } from 'redux'
import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAILURE, SELECT_PHOTO } from '../actions'

const isLoading = (state = false, {type}) => {
    switch (type) {
        case GET_PHOTOS_REQUEST:  
            return true;
        case GET_PHOTOS_SUCCESS:
            return false;
        case GET_PHOTOS_FAILURE: 
            return false;
        default:
            return state;
    }
}

const all =  (state = [], {type, payload}) => {
    switch (type) {
        case GET_PHOTOS_SUCCESS:
            return payload;
        default:
            return state;
    }
}

const selectedPhoto = (state = null, { type, payload }) => {
    switch (type) {
        case SELECT_PHOTO:
            return payload    
        default:
            return state
    }
}

const photos = combineReducers({ isLoading, all, selectedPhoto })

export default photos