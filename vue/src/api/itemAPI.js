import axios from 'axios'

export const getItem = (data) => {
    console.log(data,'fetchaaaaaaaaaaa')
    return axios({
        url: `http://localhost:3008/?textSearch=${data.textSearch}&activePage=${data.activePage}`,
        method: 'GET'
    })
}
export const addItem = (data) => {
    console.log(data.form,'fetchaaaaaaaaaaa')
    return axios({
        url: `http://localhost:3008/create`,
        method: 'POST',
        data: data.form
    })
}
export const updateItem = (data) => {
    console.log(data,'fetchaaaaaaaaaaa')
    return axios({
        url: `http://localhost:3008/?name=${data.name}&id=${data.id}`,
        method: 'PUT'
    })
}
export const deleteItem = (data) => {
    console.log(data,'fetchaaaaaaaaaaa')
    return axios({
        url: `http://localhost:3008/?id=${data.id}`,
        method: 'DELETE'
    })
}