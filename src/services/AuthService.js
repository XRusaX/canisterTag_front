import http from '../http-common'

class AgentDataService {
    get(id) {
        return http.get(`/getAgent${id}`)
    }

    getAll() {
        return http.get('/getAllAgents')
    }

    save(data) {
        return http.post('/saveAgent', data)
    }

    update(id, data) {
        return http.put(`/updateAgent${id}`, data)
    }
    
    delete(id) {
        return http.delete(`/deleteAgent${id}`)
    }
}

export default new AgentDataService()
