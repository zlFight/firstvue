export default {
    state: {
        tableConfig: {
            stripe: true,
            check: true,
            height: '100%',
            no: false,
            border: false,
            size: "mini",
            fit: true,
            showHeader: true,
            maxHeight: '100%',
            highlightCurrentRow: false,
            showOverflowTooltip: true,
            isShowLoading: false,
            loadingColor: "rgba(0, 0, 0, 0.5)",
            loadingText: "数据正在加载中",
            loadingSpinner: "",
            emptyText: "--",
            treeTable: {
                indent: 10,
                expand: false,
                rowKey: "",
                child: {
                    children: 'children',
                    hasChildren: 'hasChildren'
                }
            }
        }
    },
    getters: {
    },
    mutations: {
        setTableHeight(state, obj) {
            state.tableConfig.height = obj;
        },
    },
    actions: {
    }
}