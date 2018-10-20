export const getPhotos = () => 
    fetch('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0').
    then(respose => {
        if(respose.status === 200 || respose.status === 201) {
            return respose.json()
        }
        throw new Error('Request error')
    })