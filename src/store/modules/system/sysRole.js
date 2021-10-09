// import {getSysMenu} from '../../../service/service/index'

const initRow = {
    resourceName: '',
    remarks: '',
    version: '',
    userList: [],
    resourcesList: []
}

export default {
    state: {
        selectRow: initRow,
        tableData: [],
        operationType: ""
    },
    getters: {
    },
    mutations: {
        initSelectRow(state){
            state.selectRow = initRow;
        },
        setSelectRow(state, obj){
            state.selectRow = obj;
        },
        setTableData(state, obj){
            state.tableData = obj;
        },
        setOperationType(state, obj){
            state.operationType = obj;
        },
        setResourcesList(state, obj){
            state.selectRow.resourcesList = obj;
        },
    },
    actions: {
        getResourcesList(context){
            // getSysMenu({}).then(data => {
            //     if(data.state == 1){
            //         context.commit("setResourcesList", data.data);
            //     }
            // })
        }
    }
}