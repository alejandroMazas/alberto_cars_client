import axios from 'axios'

class AuthService {

    constructor() {
        this.axiosApp = axios.create({ baseURL: 'http://localhost:5005' })

        this.axiosApp.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    saveUser = user => {
        return this.axiosApp.post('/signup', user)
    }

    loginUser = user => {
        return this.axiosApp.post('/login', user)
    }

    verify = token => {
        return this.axiosApp.get('/verify', { headers: { Authorization: `Bearer ${token}` } })
    }
}

const authService = new AuthService()

export default authService