import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "@/utils/element-ui.js";
import "./style/index.scss";
import "./icons/index.js";
import "./permission.js";
// 引入二维码插件
// 引入eCharts
// eslint-disable-next-line import/first
import echarts from "echarts";
//  注册全局过滤器
// eslint-disable-next-line import/first
import * as custom from "./utils/filters.js";
// eslint-disable-next-line import/first
import i18n from "./lang/index.js";
// eslint-disable-next-line import/first
import Element from "element-ui";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import VueQriously from "vue-qriously";
Vue.use(VueQriously);

Vue.prototype.$echarts = echarts;
Object.keys(custom).forEach(key => {
    Vue.filter(key, custom[key]);
});
Vue.use(Element, {
    size: "small", // element 组件的尺寸 可以自行调整medium、small、mini
    i18n: (key, value) => i18n.t(key, value)
});

Vue.config.productionTip = false;

require("./mock/index.js");
new Vue({
    router,
    i18n,
    store,
    render: h => h(App)
}).$mount("#app");
