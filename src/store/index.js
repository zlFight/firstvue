import Vue from 'vue'
import Vuex from 'vuex'
import system from './modules/index'
import sysRole from './modules/system/sysRole'
import tableModules from './modules/tableModules'
import yzwgl from './modules/yzwgl/index'
import zsfagl from './modules/zsfagl/index'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    modules: {
        system: system,
        tableModules: tableModules,
        sysRole: sysRole,
        yzwgl: yzwgl,
        zsfagl: zsfagl,
    }
})
