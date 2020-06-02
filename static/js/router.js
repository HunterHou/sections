const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
    { path: "/home", component: homeVue },
    { path: "/menu", component: menu },
    { path: "/context/:id", component: detail }
];
const router = new VueRouter({
    routes,
});