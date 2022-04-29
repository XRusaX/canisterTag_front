import http from '../http-common'

class QuotaDataService {
    getAll() {
        return http.get('/getAllQuotas')
    }

    getAllByCompany(company) {
        console.log("QuotaDataService " + company);
        return http.post('/getAllByCompany',  company)
    }

    get() {
        return http.get(`/agent`)
    }

    create(data) {
        return http.post('/save', data)
    }

    delete(id) {
        return http.delete(`/delete/${id}`)
    }
}

export default new QuotaDataService()
