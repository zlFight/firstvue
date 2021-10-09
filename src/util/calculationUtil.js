import { uuid } from "vue-uuid";

let base={};
base.install = function (Vue, options) {


    /**
     * 主动触发resize事件
     */
    Vue.prototype.onResize = () => {
      debugger;
        if(document.createEvent) {
            var event = document.createEvent("HTMLEvents");
            event.initEvent("resize", true, true);
            window.dispatchEvent(event);
        }
    }

    /**
     * 主动触发resize事件
     */
    Vue.prototype.cancleUnblur = (e) => {
        let target = e.target;
        if (target.nodeName == "SPAN") {
            target = e.target.parentNode;
        }
        target.blur();
    }



    /**
     * 格式化时间
     * @param date
     * @param fmt
     * @return {*}
     */
    Vue.prototype.formatDate = (date, fmt) => {
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        let o = {
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds()
        };
        for (let k in o) {
            if (new RegExp(`(${k})`).test(fmt)) {
                let str = o[k] + '';
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
            }
        }
        return fmt;
        function padLeftZero (str) {
            return ('00' + str).substr(str.length);
        };
    }
    /**
     * 时间戳转换
     * @param date
     * @return {*}
     */
    Vue.prototype.getTime = (date) => {
        var date = new Date(date);
        var y = date.getFullYear()
        var m = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
        var d = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate())
        return y + m + d
    }

    /**
     * 生成uuid
     */
    Vue.prototype.getUuid = () => {
        return uuid.v4().replaceAll("-", "") + "$|";
    }

    /**
     * 生成uuid
     */
    Vue.prototype.handleUuid = (stationId) => {
        return stationId != undefined && stationId != null && stationId.length > 34 ? stationId.substring(34) : stationId;
    }
}

export default base;
