import actions from './actions'
import * as types from './types'

const DEFAULT_STATE ={
    isLoading: false,
    listItem: [],
    message: '',
    error: false,
    activePage:1,
    totalPage:1,
    textSearch: '',
}

const itemModule ={
    namespaced:true,
    state:() => DEFAULT_STATE,
    getter:{},
    actions,
    mutations:{
        [types.GET_ITEM_REQUEST](state){
            state.isLoading = true
        },
        [types.ADD_ITEM_REQUEST](state){
            state.isLoading = true
        
        },
        [types.DELETE_ITEM_REQUEST](state){
            state.isLoading = true
        },
        [types.UPDATE_ITEM_REQUEST](state){
            state.isLoading = true
        },

        [types.GET_ITEM_SUCCESS](state, payload){
            state.isLoading = false
            state.error = false
            state.listItem = payload.listData
            state.totalPage = payload.totalPage
            state.activePage = payload.activePage
            state.textSearch = ''
        },
        [types.ADD_ITEM_SUCCESS](state){
            state.isLoading = false
            state.error = false
        },
        [types.DELETE_ITEM_SUCCESS](state){
            state.isLoading = false
            state.error = false
        },
        [types.UPDATE_ITEM_SUCCESS](state){
            state.isLoading = false
            state.error = false
        },

        [types.GET_ITEM_FAILURE](state, error){
            state.isLoading = false
            state.error = true
            state.message = error.message
        },
        [types.ADD_ITEM_FAILURE](state, error){
            state.isLoading = false
            state.error = true
            state.message = error.message
        },
        [types.DELETE_ITEM_FAILURE](state, error){
            state.isLoading = false
            state.error = true
            state.message = error.message
        },
        [types.UPDATE_ITEM_FAILURE](state, error){
            state.isLoading = false
            state.error = true
            state.message = error.message
        },

    }
}
export default itemModule