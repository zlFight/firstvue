export default {
    state: {
        redirectUrl: '',
        loginName: '',
        nickName: '',
        password: '',
        captcha: '',
        code: '',
        captchaUrl: "",
        type: 'match',
        errorMsg: '',
        systemId: "",
        headerState: {
            isCollapse: true,
            logoUrl: require('../../assets/img/logo.png')
        },
        menuList: [],
        menuNavMap: {},
        selectMenuNav: {},
        isConnect: false,
        stompClient: null,
        editableTabs: [
            {
                content: '/overview',
                componentsName: 'overview',
                name: '0',
                title:'首页'
            }
        ],
        editableTabsValue: "",
        tabIndex: '-1',
        iconList: ['el-icon-menu', 'el-submenu__icon-arrow el-icon-arrow-down', 'el-icon-s-grid', 'el-icon-s-home', 'el-icon-user', 'el-icon-setting', 'el-icon-circle-close', 'el-breadcrumb__separator el-icon-arrow-right', 'el-select__caret el-input__icon el-icon-arrow-up', 'el-icon-search', 'el-icon-plus', 'el-icon-edit', 'el-icon-delete', 'el-icon-upload2', 'el-icon-download', 'el-icon-arrow-right', 'el-icon el-icon-arrow-left', 'el-icon el-icon-arrow-right', 'el-dialog__close el-icon el-icon-close', 'el-input__icon el-icon-arrow-down', 'el-icon-arrow-right el-cascader-node__postfix', 'el-icon-platform-eleme', 'el-icon-eleme', 'el-icon-delete-solid', 'el-icon-s-tools', 'el-icon-user-solid', 'el-icon-phone', 'el-icon-phone-outline', 'el-icon-more', 'el-icon-more-outline', 'el-icon-star-on', 'el-icon-star-off', 'el-icon-s-goods', 'el-icon-goods', 'el-icon-warning', 'el-icon-warning-outline', 'el-icon-question', 'el-icon-info', 'el-icon-remove', 'el-icon-circle-plus', 'el-icon-success', 'el-icon-error', 'el-icon-zoom-in', 'el-icon-zoom-out', 'el-icon-remove-outline', 'el-icon-circle-plus-outline', 'el-icon-circle-check', 'el-icon-s-help', 'el-icon-help', 'el-icon-minus', 'el-icon-check', 'el-icon-close', 'el-icon-picture', 'el-icon-picture-outline', 'el-icon-picture-outline-round', 'el-icon-upload', 'el-icon-camera-solid', 'el-icon-camera', 'el-icon-video-camera-solid', 'el-icon-video-camera', 'el-icon-message-solid', 'el-icon-bell', 'el-icon-s-cooperation', 'el-icon-s-order', 'el-icon-s-platform', 'el-icon-s-fold', 'el-icon-s-unfold', 'el-icon-s-operation', 'el-icon-s-promotion', 'el-icon-s-release', 'el-icon-s-ticket', 'el-icon-s-management', 'el-icon-s-open', 'el-icon-s-shop', 'el-icon-s-marketing', 'el-icon-s-flag', 'el-icon-s-comment', 'el-icon-s-finance', 'el-icon-s-claim', 'el-icon-s-custom', 'el-icon-s-opportunity', 'el-icon-s-data', 'el-icon-s-check', 'el-icon-share', 'el-icon-d-caret', 'el-icon-caret-left', 'el-icon-caret-right', 'el-icon-caret-bottom', 'el-icon-caret-top', 'el-icon-bottom-left', 'el-icon-bottom-right', 'el-icon-back', 'el-icon-right', 'el-icon-bottom', 'el-icon-top', 'el-icon-top-left', 'el-icon-top-right', 'el-icon-arrow-left', 'el-icon-arrow-down', 'el-icon-arrow-up', 'el-icon-d-arrow-left', 'el-icon-d-arrow-right', 'el-icon-video-pause', 'el-icon-video-play', 'el-icon-refresh', 'el-icon-refresh-right', 'el-icon-refresh-left', 'el-icon-finished', 'el-icon-sort', 'el-icon-sort-up', 'el-icon-sort-down', 'el-icon-rank', 'el-icon-loading', 'el-icon-view', 'el-icon-c-scale-to-original', 'el-icon-date', 'el-icon-edit-outline', 'el-icon-folder', 'el-icon-folder-opened', 'el-icon-folder-add', 'el-icon-folder-remove', 'el-icon-folder-delete', 'el-icon-folder-checked', 'el-icon-tickets', 'el-icon-document-remove', 'el-icon-document-delete', 'el-icon-document-copy', 'el-icon-document-checked', 'el-icon-document', 'el-icon-document-add', 'el-icon-printer', 'el-icon-paperclip', 'el-icon-takeaway-box', 'el-icon-monitor', 'el-icon-attract', 'el-icon-mobile', 'el-icon-scissors', 'el-icon-umbrella', 'el-icon-headset', 'el-icon-brush', 'el-icon-mouse', 'el-icon-coordinate', 'el-icon-magic-stick', 'el-icon-reading', 'el-icon-data-line', 'el-icon-data-board', 'el-icon-pie-chart', 'el-icon-data-analysis', 'el-icon-collection-tag', 'el-icon-film', 'el-icon-suitcase', 'el-icon-suitcase-1', 'el-icon-receiving', 'el-icon-collection', 'el-icon-files', 'el-icon-notebook-1', 'el-icon-notebook-2', 'el-icon-toilet-paper', 'el-icon-office-building', 'el-icon-school', 'el-icon-table-lamp', 'el-icon-house', 'el-icon-no-smoking', 'el-icon-smoking', 'el-icon-shopping-cart-full', 'el-icon-shopping-cart-1', 'el-icon-shopping-cart-2', 'el-icon-shopping-bag-1', 'el-icon-shopping-bag-2', 'el-icon-sold-out', 'el-icon-sell', 'el-icon-present', 'el-icon-box', 'el-icon-bank-card', 'el-icon-money', 'el-icon-coin', 'el-icon-wallet', 'el-icon-discount', 'el-icon-price-tag', 'el-icon-news', 'el-icon-guide', 'el-icon-male', 'el-icon-female', 'el-icon-thumb', 'el-icon-cpu', 'el-icon-link', 'el-icon-connection', 'el-icon-open', 'el-icon-turn-off', 'el-icon-set-up', 'el-icon-chat-round', 'el-icon-chat-line-round', 'el-icon-chat-square', 'el-icon-chat-dot-round', 'el-icon-chat-dot-square', 'el-icon-chat-line-square', 'el-icon-message', 'el-icon-postcard', 'el-icon-position', 'el-icon-turn-off-microphone', 'el-icon-microphone', 'el-icon-close-notification', 'el-icon-bangzhu', 'el-icon-time', 'el-icon-odometer', 'el-icon-crop', 'el-icon-aim', 'el-icon-switch-button', 'el-icon-full-screen', 'el-icon-copy-document', 'el-icon-mic', 'el-icon-stopwatch', 'el-icon-medal-1', 'el-icon-medal', 'el-icon-trophy', 'el-icon-trophy-1', 'el-icon-first-aid-kit', 'el-icon-discover', 'el-icon-place', 'el-icon-location', 'el-icon-location-outline', 'el-icon-location-information', 'el-icon-add-location', 'el-icon-delete-location', 'el-icon-map-location', 'el-icon-alarm-clock', 'el-icon-timer', 'el-icon-watch-1', 'el-icon-watch', 'el-icon-lock', 'el-icon-unlock', 'el-icon-key', 'el-icon-service', 'el-icon-mobile-phone', 'el-icon-bicycle', 'el-icon-truck', 'el-icon-ship', 'el-icon-basketball', 'el-icon-football', 'el-icon-soccer', 'el-icon-baseball', 'el-icon-wind-power', 'el-icon-light-rain', 'el-icon-lightning', 'el-icon-heavy-rain', 'el-icon-sunrise', 'el-icon-sunrise-1', 'el-icon-sunset', 'el-icon-sunny', 'el-icon-cloudy', 'el-icon-partly-cloudy', 'el-icon-cloudy-and-sunny', 'el-icon-moon', 'el-icon-moon-night', 'el-icon-dish', 'el-icon-dish-1', 'el-icon-food', 'el-icon-chicken', 'el-icon-fork-spoon', 'el-icon-knife-fork', 'el-icon-burger', 'el-icon-tableware', 'el-icon-sugar', 'el-icon-dessert', 'el-icon-ice-cream', 'el-icon-hot-water', 'el-icon-water-cup', 'el-icon-coffee-cup', 'el-icon-cold-drink', 'el-icon-goblet', 'el-icon-goblet-full', 'el-icon-goblet-square', 'el-icon-goblet-square-full', 'el-icon-refrigerator', 'el-icon-grape', 'el-icon-watermelon', 'el-icon-cherry', 'el-icon-apple', 'el-icon-pear', 'el-icon-orange', 'el-icon-coffee', 'el-icon-ice-tea', 'el-icon-ice-drink', 'el-icon-milk-tea', 'el-icon-potato-strips', 'el-icon-lollipop', 'el-icon-ice-cream-square', 'el-icon-ice-cream-round'],
        controlSize: 'small',
        loadingOptions: {
            lock: true,
            text: '资源加载中......',
            spinner: '',
            background: 'rgba(0, 0, 0, 0.5)'
        },
        dialogOptions: {
            centerDialogVisible: false,
            isCloseModel: false,
            fullscreen: true,
            width: '60%',
            isAppendDody: true,
            dialogName: '',
            dialogTitle: ''
        },
        pagination: {
            currentPage: 1,
            pageSizes: [10, 20, 30, 40, 50],
            pageSize: 10,
            layout: "sizes, prev, pager, next, jumper,->, total",
            total: 0,
            background: true,
            pagerCount: 7,
            small: true
        },
        minemapOptions: {
            map: {
                container: "mapContainer",
                style: process.env.VUE_APP_MINEMAP_URL + '/service/solu/style/id/12868', /*底图样式*/
                center: [116.39, 39.92],
                zoom: 11,
                pitch: 0,
                maxZoom: 19,
                minZoom: 6
            },
            minemapUrls: {
                domainUrl: process.env.VUE_APP_MINEMAP_URL,
                dataDomainUrl: process.env.VUE_APP_MINEMAP_URL,
                spriteUrl: process.env.VUE_APP_MINEMAP_URL +"/minemapapi/v2.1.0/sprite/sprite",
                serviceUrl: process.env.VUE_APP_MINEMAP_URL + "/service/",
                appKey: "80661f5b8c034426913c41f7755102e9",
                solution: "12868",
            },
            control: {
                showGjzyd: true,//默认开启公交专用道功能
                showDragRouter: true,   //默认开启拖拽路由功能
                showDragStations: true,   //默认开启拖拽站位功能
                showRoadNetwork: true,   //默认开启显示路网功能
                showOldLineRoute: true,   //默认开启显示原线路路由功能
                showYfaLineRoute: true,   //默认开启显示预方案路由功能
                showStationInfo: true,   //默认开启显示站位信息功能
                showSubway: false,   //默认不开启显示地铁功能，地铁图层根据地铁一起加载，不在单独控制
                showMapEdit: true,   //默认开启显示手动编辑功能
                showRangeStation: true,   //默认开启显示站位范围内的站位功能
                satellite: true,  //开启卫星图切换功能
                correct: true,   //开启纠偏功能
                route: true,   //开启轨迹图层选择功能
                toolBox: true,   //开启工具箱功能
                mapEdit: true,  //开启地图手动编辑功能
                scale: true,    //开启比例尺控件
                ranging: true,   //开启测距功能
                scalePosition: "bottom-left",
                navigation: true,   //开启缩放旋转控件
                navigationPosition: "bottom-right"
            },
            serviceUrl: {
                adminByPoint: process.env.VUE_APP_MINEMAP_URL + '/service/lbs/search/adminByPoint?appKey=80661f5b8c034426913c41f7755102e9',
                poi: process.env.VUE_APP_MINEMAP_URL + '/service/lbs/search/keyword2?city=110100&search_type=for_keywords',
                ljgh: process.env.VUE_APP_MINEMAP_LJGH + "/route/v1/bus?strategy=0&road_constr=1&road_repair=1&linkinfo=1&appKey=80661f5b8c034426913c41f7755102e9",
            }
        },
        errorPageOption: {
            "401": {
                errorImage: '401.png',
                errorCode: '401',
                errorMessage: '抱歉，您无权访问此页。',
            },
            "403": {
                errorImage: '403.png',
                errorCode: '403',
                errorMessage: '抱歉，服务器拒绝请求。',
            },
            "404": {
                errorImage: '404.png',
                errorCode: '404',
                errorMessage: '抱歉，您访问的页面不存在。',
            },
            "500": {
                errorImage: '500.png',
                errorCode: '500',
                errorMessage: '抱歉，出了点问题。',
            },
        }
    },
    getters: {
        collapse(state, obj) {// 对应着上面state
            return state.collapse + obj;
        }
    },
    mutations: {
        setPageSize(state, obj) {
            state.pagination.pageSize = obj;
        },
        setPageTotal(state, obj) {
            state.pagination.total = obj;
        },
        setCurrentPage(state, obj) {
            state.pagination.currentPage = obj;
        },
        setCenterFullscreen(state, obj) {
            state.dialogOptions.fullscreen = obj;
        },
        setCenterDialogVisible(state, obj) {
            state.dialogOptions.centerDialogVisible = obj;
        },
        setDialogTitle(state, obj) {
            state.dialogOptions.dialogTitle = obj;
        },
        setDialogName(state, obj) {
            state.dialogOptions.dialogName = obj;
        },
        setRedirectUrl(state, obj) {
            state.redirectUrl = obj;
        },
        setTabIndex(state, obj) {
            state.tabIndex = obj;
        },
        setEditableTabsValue(state, obj) {
            state.editableTabsValue = obj;
        },
        setEditableTabs(state, obj) {
            state.editableTabs = obj;
        },
        setStompClient(state, obj) {
            state.stompClient = obj;
        },
        setIsConnect(state, obj) {
            state.isConnect = obj;
        },
        setCaptcha(state, obj) {
            state.code = obj.code;
            state.captchaUrl = obj.captchaUrl;
        },
        setErrorMsg(state, obj) {
            state.errorMsg = obj;
        },
        setLoginName(state, obj) {
            state.loginName = obj;
        },
        setPassword(state, obj) {
            state.password = obj;
        },
        setCaptchaNum(state, obj) {
            state.captcha = obj;
        },
        sysToMenu(state, obj) {
            state.systemId = obj
        },
        changgeHeader(state, obj) {
            state.headerState.isCollapse = obj.isCollapse;
            state.headerState.logoUrl = obj.logoUrl;
        },
        setMenuList(state, obj){
            state.menuList = obj;
        },
        setMenuNavMap(state, obj){
            state.menuNavMap = obj;
        },
        setSelectMenuNav(state, obj){
            state.selectMenuNav = obj;
        }
    },
    actions: {}
}
