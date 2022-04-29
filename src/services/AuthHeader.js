import http from '../http-common'

class AuthService {
    get(id) {
        return http.post(`/auth/signup`)
    }

    getAll() {
        return http.post('/auth/signin')
    }
}

export default new AuthService()
