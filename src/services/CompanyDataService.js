import http from '../http-common'

class CompanyDataService {
    getAll() {
        return http.get('/getAllCompanys')
    }

    get(id) {
        return http.get(`/get?${id}`)
    }

    create(data) {
        return http.post('/save', data)
    }
    
    delete(id) {
        return http.delete(`/delete/${id}`)
    }
}

export default new CompanyDataService()
