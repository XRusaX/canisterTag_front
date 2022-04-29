import http from '../http-common'

class RfidLabelDataService {
    getAll() {
        return http.get('/getAllRfidLabels')
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

export default new RfidLabelDataService()