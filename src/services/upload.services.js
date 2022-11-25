import axios from 'axios'

class UploadService {

    constructor() {

        this.axiosApp = axios.create({ baseURL: 'http://localhost:5005' })
    }

    uploadImage(imageForm) {
        return this.axiosApp.post('/image', imageForm)
    }
}

const uploadService = new UploadService()

export default uploadService
