export const getIsLoading = state => state.photos.isLoading

export const getAllPhotos = state => state.photos.all

export const getSelectedPhoto = state => {
    const selected = state.photos.selectedPhoto
    const all = getAllPhotos(state)

    return all.find(x=> x.id === selected)
}