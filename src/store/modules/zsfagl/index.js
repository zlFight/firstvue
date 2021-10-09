export default {
    state: {
        //预方案列表数据
        yfaList: [],
        //原线路路由上行
        sxyxlly: [],
        //原线路路由下行
        xxyxlly: [],
        //预方案路由上行
        sxyfaly: [],
        //预方案路由下行
        xxyfaly: [],
        //预方案站位下行
        sxzwList: [],
        //预方案站位上行
        xxzwList: [],
        //预方案拖拽点上行
        sxDragPointList: [],
        //预方案拖拽点下行
        xxDragPointList: [],
    },
    getters: {},
    mutations: {
        setYfaList(state, obj) {
            state.yfaList = obj;
        },
        setRouteAndZw(state, obj) {
            state.sxyxlly = obj.sxyxlly;
            state.xxyxlly = obj.xxyxlly;
            state.sxyfaly = obj.sxyfaly;
            state.xxyfaly = obj.xxyfaly;
            state.sxzwList = obj.sxzwList;
            state.xxzwList = obj.xxzwList;
            state.sxDragPointList = obj.sxDragPointList != undefined && obj.sxDragPointList != null ? obj.sxDragPointList : [];
            state.xxDragPointList = obj.xxDragPointList != undefined && obj.xxDragPointList != null ? obj.xxDragPointList : [];
        },
    },
    actions: {}
}
