import axios from 'axios'

// axios.get(url[, config])
// axios.post(url[, data[, config]])

const instance = axios.create({
    baseURL: 'http://192.168.14.172:8888',
    timeout: 100000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default instance
const get = instance.get
const post = instance.post

export {get, post}

// 1.公司基本信息统计
// Get /company/base/{id}
function getCompanyInfo(id) {
    return get(`/company/mixed/${id}`).then(e => {
        return e.data.map(f => ({
            ...f,
            beginAt: window.moment(f.beginAt).format('YYYY-MM-DD'),
            endAt: window.moment(f.endAt).format('YYYY-MM-DD'),
        }))
    })
}

// 2.公司行为信息统计
// Get /company/statistics/{id}
function getCompanyStatistics(id) {
    return get(`/company/statistics/${id}`)
}

// 3.所有公司Id/Name 映射集合
// Get /company/mappings
function getCompanyMappings() {
    return get('/company/mappings')
}

// 4.通过公司基本信息预测
// Post /weka/base/prediction
// RequestBody: CompanyPojo
function getWeka(params) {
    return post('/weka', params)
}

/*

 4.通过公司基本信息预测
 Post /weka/base/prediction
 RequestBody: CompanyPojo

 5.通过公司行为信息预测
 Post /weka/statistics/prediction
 RequestBody: CompanyStatisticsPojo
 */

export {
    getCompanyInfo,
    getCompanyStatistics,
    getCompanyMappings,
    getWeka
}
