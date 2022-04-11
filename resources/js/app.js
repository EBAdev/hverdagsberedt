import { createApp, h } from "vue";
import { createInertiaApp, Link, Head } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import Layout from './Layout/AppLayout'

import { ZiggyVue } from "ziggy";
import { Ziggy } from "./ziggy";

InertiaProgress.init();

createInertiaApp({
  resolve: async (name) => {
    let page = (await import(`./Pages/${name}`)).default

    page.layout ??= Layout

    return page
  },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .component("Link", Link)
            .component("Head", Head)
            .mixin({ methods: { route } })
            .mount(el);
    },
});
