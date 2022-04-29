import http from '../http-common'

class CompanyDataService {
    get(id) {
        return http.get(`/getAgent${id}`)
    }

    getAll() {
        return http.get('/getAllAgents')
    }

    save(data) {
        console.log("Ща отправлю вот такую тему: " + data.name)
        return http.post('/saveAgent', data)
    }

    update(id, data) {
        return http.put(`/updateAgent${id}`, data)
    }
    
    delete(id) {
        return http.delete(`/deleteAgent${id}`)
    }
}

export default new CompanyDataService()
