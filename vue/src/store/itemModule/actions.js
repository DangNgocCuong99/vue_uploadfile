import * as  types from './types'
import * as itemAPI from '../../api/itemAPI';

const actions = {
    async [types.GET_ITEM_REQUEST]({commit},payload){
        commit(types.GET_ITEM_REQUEST)
        try {
            console.log(payload,'payload saga')
            const res = await itemAPI.getItem(payload)
            console.log(res,'data SAGA')
            if (!res) throw res
            commit(types.GET_ITEM_SUCCESS,res.data)

        } catch (error) {
            commit(types.GET_ITEM_FAILURE,error)
        }
    },
    async [types.ADD_ITEM_REQUEST]({commit,dispatch},payload){
        commit(types.ADD_ITEM_REQUEST)
        try {
            console.log(payload,'dataSagaaAddd')
            await itemAPI.addItem(payload)
            commit(types.ADD_ITEM_SUCCESS)
            dispatch(types.GET_ITEM_REQUEST,payload)

        } catch (error) {
            commit(types.ADD_ITEM_FAILURE,error)
        }
    },
    async [types.DELETE_ITEM_REQUEST]({commit,dispatch},payload){
        commit(types.DELETE_ITEM_REQUEST)
        try {
            console.log(payload,'dataSagaaAddd')
            await itemAPI.deleteItem(payload)
            commit(types.DELETE_ITEM_SUCCESS)
            dispatch(types.GET_ITEM_REQUEST,payload)    
        } catch (error) {
            commit(types.DELETE_ITEM_FAILURE,error)
        }
    },
    async [types.UPDATE_ITEM_REQUEST]({commit,dispatch},payload){
        commit(types.UPDATE_ITEM_REQUEST)
        try {
            console.log(payload,'dataSagaaAddd')
            await itemAPI.updateItem(payload)
            commit(types.UPDATE_ITEM_SUCCESS)
            dispatch(types.GET_ITEM_REQUEST,payload)

        } catch (error) {
            commit(types.UPDATE_ITEM_FAILURE,error)
        }
    },
}
export default actions